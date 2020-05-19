import React from 'react';
import './Articles.css';

import useArticles from "../hooks/useArticles";

import ArticlesList from "./ArticlesList";
import ArticlesSearchInput from "./ArticlesSearchInput";

const Articles = () => {
  const { articles, fetch } = useArticles();

  return (
    <div className="articles">
      <ArticlesSearchInput onSearch={fetch} />
      {
        articles && <ArticlesList articles={articles.all} />
      }
    </div>
  );
}

export default Articles;
