import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import SimpleImage from "@editorjs/simple-image";
import { ItalicInlineTool, UnderlineInlineTool } from "editorjs-inline-tool";

export const EDITOR_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    config: {
      placeholder: "Enter a Header",
    },
    inlineToolbar: true,
  },
  image: { class: SimpleImage, inlineToolbar: true },
};
