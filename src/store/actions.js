const setArticles = data => ({
  type: 'SET_ARTICLES',
  payload: data,
});

export function fetchArticles(name){
  return async dispatch => {
    try {
      const response = await fetch(`https://jsonmock.hackerrank.com/api/articles?author=${name}&page=1`);
      const { data } = await response.json();
      dispatch(setArticles(data));
    } catch (e) {
      console.log(e);
    }
  };
}