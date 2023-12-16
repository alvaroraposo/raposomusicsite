import React from "react";

const HeaderTitle = ({ children }: { children: string }) => {
  return (
    <h1 className="text-black font-extrabold text-4xl font-sans['Arial']">
      {children}
    </h1>
  );
};

export default HeaderTitle;
