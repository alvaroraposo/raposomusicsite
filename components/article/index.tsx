import React from "react";
import Header from "./header";
import Body from "./Body";

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

  const articleArray = [
    `Jenna Ortega não estará no elenco de Pânico VII, noticiou hoje (22) o
          Deadline. A atriz interpreta Tara Carpenter, uma das protagonistas da
          franquia, desde Pânico V (2022).`,
    `De acordo com o Deadline, a saída de Ortega se deve à agenda de
          filmagens da 2ª temporada de Wandinha, produção da Netflix.`,
    `No entanto, rumores circulavam desde ontem (21) que Ortega deixaria o
          elenco de Pânico em protesto à demissão da colega de elenco Melissa
          Barrera, dispensada da franquia após comentários em suas redes sociais
          expressando apoio à Palestina em meio ao conflito Israel-Hamas.`,
    `Com direção de Christopher Landon (A Morte te Dá Parabéns), Pânico VII
          está nos estágios iniciais de desenvolvimento e ainda não tem data de
          estreia definida.`,
  ];

  return (
    <div className="flex flex-col w-full p-2">
      <Header headerData={headerData} />
      <div className="mt-4 text-black text-xl p-2">
        <Body articleArray={articleArray} />
      </div>
    </div>
  );
};

export default Article;
