import { useStore, bindActions } from "../store";
import { fetchArticles } from "../store/actions";

const useArticles = () => {
  const { state, dispatch } = useStore();
  const { articles } = state;

  const { fetchArticles: boundFetchArticles } = bindActions({ fetchArticles }, dispatch);

  return {
    articles,
    fetch: boundFetchArticles,
  }
};

export default useArticles;