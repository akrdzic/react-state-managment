export function fetchArticles(name){
  return async dispatch => {
    try {
      const response = await fetch(`https://jsonmock.hackerrank.com/api/articles?author=${name}&page=1`);
      const { data } = await response.json();
      dispatch({ type: 'SET_ARTICLES', payload: data });
    } catch (e) {
      console.log(e);
    }
  };
}

export function filterEmployees(value) {
  return dispatch => dispatch({ type: 'FILTER_EMPLOYEES', payload: value });
}