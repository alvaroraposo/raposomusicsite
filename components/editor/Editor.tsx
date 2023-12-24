import React, { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import type { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "./EditorTools";

type EditorType = {
  data: OutputData | undefined;
  onChange(val: OutputData): void;
  holder: string;
};

const Editor = ({ data, onChange, holder }: EditorType) => {
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: EDITOR_TOOLS,
        data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <div id={holder} className="prose max-w-full" />;
};

export default memo(Editor);
