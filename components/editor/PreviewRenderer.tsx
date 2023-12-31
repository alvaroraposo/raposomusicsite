import editorJsToHtml from "editorjs-html";
import type { OutputData } from "@editorjs/editorjs";
const EditorJsToHtml = editorJsToHtml();

const PreviewRenderer = ({ data }: { data: OutputData }) => {
  const html = EditorJsToHtml.parse(data);
  return (
    <div className="max-w-full" key={data.time}>
      {html.map((item, index) => {
        console.log("item", item, typeof item);
        if (typeof item === "string") {
          return (
            <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
          );
        }
        return item;
      })}
    </div>
  );
};

export default PreviewRenderer;
