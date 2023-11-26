import React from "react";

type ArticleCategoriesType = {
  mainCategory: string;
  articleCategory: string;
  itemCategories: Array<string>;
};

const ArticleCategories = ({
  mainCategory = "FILMES",
  articleCategory = "NOTÍCIA",
  itemCategories = ["Pânico VII", "Jenna Ortega"],
}: ArticleCategoriesType) => {
  return (
    <>
      <div className="bg-yellow-400  text-gray-800 p-2 rounded-s-md ">
        <span className="table-cell align-middle">{mainCategory}</span>
      </div>
      <div className="bg-orange-950 text-white p-2 rounded-e-md">
        <span className="table-cell align-middle">{articleCategory}</span>
      </div>
    </>
  );
};

export default ArticleCategories;
