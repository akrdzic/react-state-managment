import { useStore, bindActions } from "../store";
import { filterEmployees } from "../store/actions";

const useEmployees = () => {
  const { state, dispatch } = useStore();
  const { employees } = state;

  const { filterEmployees: boundFilterEmployees } = bindActions({ filterEmployees }, dispatch);

  return {
    all: employees ? employees.all : [],
    filtered: employees ? employees.filtered : [],
    filter: boundFilterEmployees,
  };
};

export default useEmployees;