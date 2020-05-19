export default (state = { all: [] }, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return { all: action.payload || [] };
    default:
      return state;
  }
};