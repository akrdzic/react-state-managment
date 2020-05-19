import React from "react";
import rootReducer from "./reducers";

const GlobalStore = React.createContext();

const asyncer = (dispatch, state) => action =>
  typeof action === 'function' ? action(dispatch, state) : dispatch(action);

const Provider = ({ children }) => {
  const [ state, dispatchBase ] = React.useReducer(rootReducer, {});

  const dispatch = React.useCallback(asyncer(dispatchBase, state), []);

  return (
    <GlobalStore.Provider value={{ state, dispatch }}>
      { children }
    </GlobalStore.Provider>
  );
};

export default Provider;

export const useStore = () => React.useContext(GlobalStore);

export const bindActions = (actions, dispatch) => {
  const bindAction = (action, dispatch) => {
    return function() {
      return dispatch(action.apply(null, arguments));
    };
  }

  const boundActions = {};
  Object.keys(actions).forEach(key => {
    const action = actions[key];
    boundActions[key] = bindAction(action, dispatch);
  });

  return boundActions;
};