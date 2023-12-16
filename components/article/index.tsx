import React from "react";
import Header from "./header";

const Article = () => {
  const headerData = {
    headerImage: {
      imageFile: "/article_cover.jpg",
      imageCaption: "Jenna Ortega em cena de Pânico 5 (Reprodução)",
    },
    categories: {
      mainCategory: "FILMES",
      articleCategory: "NOTÍCIA",
      itemCategories: ["Pânico VII", "Jenna Ortega"],
    },
    titles: {
      title: "Pânico VII | Jenna Ortega sai do elenco da continuação",
      subtitle:
        "Notícia se segue à demissão de Melissa Barrera, outra das protagonistas da saga",
    },
    author: "Álvaro Raposo",
    date: "22.11.2023, ÀS 15H03",
  };

  return (
    <div className="flex flex-col w-full p-2">
      <Header headerData={headerData} />
    </div>
  );
};

export default Article;
