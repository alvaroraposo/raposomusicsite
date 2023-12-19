import React from "react";
import Categories from "../header/Categories";
import HeaderImage from "../header/HeaderImage";
import Title from "../header/Title";
import Subtitle from "../header/Subtitle";
import Author from "../header/Author";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faFacebook,
  faXTwitter,
  faThreads,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

type HeaderImageType = {
  imageFile: string;
  imageCaption: string;
};

type CategoriesType = {
  mainCategory: string;
  articleCategory: string;
  itemCategories: Array<string>;
};

type TitlesType = {
  title: string;
  subtitle: string;
};

type HeaderData = {
  headerImage: HeaderImageType;
  categories: CategoriesType;
  author: string;
  date: string;
  titles: TitlesType;
};

type HeaderType = {
  headerData: HeaderData;
};

const Header = ({ headerData }: HeaderType) => {
  const { headerImage, categories, author, date, titles } = headerData;
  return (
    <div className="flex flex-col w-full justify-center px-3">
      <HeaderImage
        imageFile={headerImage.imageFile}
        imageCaption={headerImage.imageCaption}
      />
      <div className="flex flex-row text-xs italic tracking-[0.2em] -translate-y-8">
        <Categories
          mainCategory={categories.mainCategory}
          articleCategory={categories.articleCategory}
          itemCategories={categories.itemCategories}
        />
      </div>
      <div>
        <Title>{titles.title}</Title>
      </div>
      <div className="mt-4">
        <Subtitle>{titles.subtitle}</Subtitle>
      </div>
      <div className="mt-4 ">
        <Author author={author} postdate={date} />
      </div>
      <div className="mt-4">
        <div className="max-w-xs w-60 text-gray-800 flex justify-between">
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//omelete.com.br/terror/panico-7-jenna-ortega-saida">
            <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
          </a>
          <a href="https://twitter.com/intent/tweet?text=P%C3%A2nico%20VII%20%7C%20Jenna%20Ortega%20sai%20do%20elenco%20da%20continua%C3%A7%C3%A3o https%3A//omelete.com.br/terror/panico-7-jenna-ortega-saida">
            <FontAwesomeIcon icon={faXTwitter} size="2x"></FontAwesomeIcon>
          </a>
          <a href="https://api.whatsapp.com/send?text=P%C3%A2nico%20VII%20%7C%20Jenna%20Ortega%20sai%20do%20elenco%20da%20continua%C3%A7%C3%A3o https%3A//omelete.com.br/terror/panico-7-jenna-ortega-saida">
            <FontAwesomeIcon icon={faWhatsapp} size="2x"></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
