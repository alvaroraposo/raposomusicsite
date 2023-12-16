import React from "react";

const Author = ({ author, postdate }: { author: string; postdate: string }) => {
  return (
    <>
      <p className="text-gray-400 italic uppercase">{author}</p>
      <p className="text-black text-sm font-extralight max-w-xs w-60 border-2 border-x-0 border-t-0 border-b-yellow-400 pb-1">
        {postdate}
      </p>
    </>
  );
};

export default Author;
