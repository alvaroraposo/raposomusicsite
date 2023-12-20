import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import Link from "@editorjs/link";
import Image from "@editorjs/image";

export const EDITOR_TOOLS = {
  header: {
    class: Header,
    config: {
      placeholder: "Enter a Header",
      levels: [2, 3, 4],
      defaultLevel: 2,
    },
  },
  paragraph: Paragraph,
  link: Link,
  image: Image,
};
