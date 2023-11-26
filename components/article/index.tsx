import React from "react";
import Image from "next/image";
import ArticleCategories from "./ArticleCategories";
import ArticleImage from "./ArticleImage";

const Article = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full justify-center p-3">
        <ArticleImage
          imageFile="/article_cover.jpg"
          imageCaption="Jenna Ortega em cena de Pânico 5 (Reprodução)"
        />
        <div className="flex flex-row text-xs italic tracking-[0.2em] -translate-y-8">
          <ArticleCategories
            mainCategory="FILMES"
            articleCategory="NOTÍCIA"
            itemCategories={["Pânico VII", "Jenna Ortega"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
