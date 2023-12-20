"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import PreviewRenderer from "./PreviewRenderer";
const Editor = dynamic(() => import("./Editor"), { ssr: false });

const Index = () => {
  const [data, setData] = useState();
  return (
    <div className="grid grid-cols-2 gap-2 m-2 bg-white text-black">
      <div className="col-span-1">
        <h1>Editor</h1>
        <div className="border rounded-md">
          <Editor data={data} onChange={setData} holder="editorjs-container" />
        </div>
      </div>
      <div className="col-span-1">
        <h1>Preview</h1>
        <div className="border rounded-md">
          <div className="p-16">{data && <PreviewRenderer data={data} />}</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
