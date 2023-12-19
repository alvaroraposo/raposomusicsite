import React from "react";

const Body = ({ articleArray }: { articleArray: Array<string> }) => {
  return articleArray.map((item, index) => (
    <p key={index} className="leading-10 mb-6">
      {item}
    </p>
  ));
};

export default Body;
