import articlesReducer from "./articles";
import employeesReducer from "./employees";

export default function rootReducer(state, action) {
  const { articles, employees } = state;
  return {
    articles: articlesReducer(articles, action),
    employees: employeesReducer(employees, action),
  };
}