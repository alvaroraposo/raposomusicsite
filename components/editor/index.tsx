"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import type { OutputData } from "@editorjs/editorjs";

import PreviewRenderer from "./PreviewRenderer";
import MyCombobox from "./MyCombobox";
import SubjectRadio from "./SubjectRadio";
const Editor = dynamic(() => import("./Editor"), { ssr: false });

const Index = () => {
  const [data, setData] = useState<OutputData>();
  return (
    <div className="flex flex-col bg-white text-black w-full mt-2 px-4">
      <div>
        <h1 className="flex justify-center">Edição de Artigos</h1>
        <div className="mt-4">
          <SubjectRadio />
        </div>
        <div className="flex mt-2">
          <div>
            <MyCombobox />
          </div>
        </div>
        <div className="border rounded-md mt-2">
          <Editor data={data} onChange={setData} holder="editorjs-container" />
        </div>
      </div>
      <div className="mt-6">
        <h1>Preview do Artigo</h1>
        <div className="border rounded-md mt-2 mb-2">
          <div className="p-16">{data && <PreviewRenderer data={data} />}</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
