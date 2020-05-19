import articlesReducer from "./articles";

export default function rootReducer(state, action) {
  const { articles } = state;
  return {
    articles: articlesReducer(articles, action),
  };
}