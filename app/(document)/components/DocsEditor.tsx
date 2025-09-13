"use client";

import { useState } from "react";
import Tiptap from "./docs-editor/Tiptap";

const DocsEditor = () => {
  const [document, setDocument] = useState("");

  const onChange = (content: string) => {
    console.log(content);
    setDocument(content);
  };

  return (
    <section className="flex min-h-screen">
      <Tiptap
        document={document}
        setDocument={setDocument}
        onChange={onChange}
      />
    </section>
  );
};

export default DocsEditor;
