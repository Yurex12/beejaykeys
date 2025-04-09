import MarkdownIt from "markdown-it";
import { useState } from "react";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt();

export default function MarkdownEditor() {
  const [content, setContent] = useState("");

  return (
    <MdEditor
      value={content}
      style={{ height: "170px" }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={({ text }) => setContent(text)}
    />
  );
}
