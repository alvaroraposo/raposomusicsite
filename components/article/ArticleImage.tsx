import React from "react";
import Image from "next/image";

type ArticleImageType = {
  imageFile: string;
  imageCaption: string;
};

const ArticleImage = ({
  imageFile = "/article_cover.jpg",
  imageCaption = "Jenna Ortega em cena de Pânico 5 (Reprodução)",
}: ArticleImageType) => {
  return (
    <div className="flex flex-col">
      <Image
        className="relative"
        src={imageFile}
        alt={imageCaption}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto", borderRadius: "5px" }}
      />
      <span className="flex justify-end capitalize text-xs text-gray-500">
        {imageCaption}
      </span>
    </div>
  );
};

export default ArticleImage;
