import React from "react";
import Categories from "../header/Categories";
import HeaderImage from "../header/HeaderImage";
import Title from "../header/Title";
import Subtitle from "../header/Subtitle";
import Author from "../header/Author";

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
    </div>
  );
};

export default Header;
