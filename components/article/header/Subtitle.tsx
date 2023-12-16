import React from "react";

const Subtitle = ({ children }: { children: string }) => {
  return <h2 className="text-gray-500 text-xl font-extralight">{children}</h2>;
};

export default Subtitle;
