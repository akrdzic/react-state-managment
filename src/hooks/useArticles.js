import { useStore, bindActions } from "../store";
import { fetchArticles } from "../store/actions";

const useArticles = () => {
  const { state, dispatch } = useStore();
  const { articles: { all = [] } = {} } = state;

  const { fetchArticles: boundFetchArticles } = bindActions({ fetchArticles }, dispatch);

  return {
    all,
    fetch: boundFetchArticles,
  }
};

export default useArticles;