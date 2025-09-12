"use client";

import DocumentHeadedrInput from "./document-header/DocumentHeadedrInput";
import DocumentHeaderLogo from "./document-header/DocumentHeaderLogo";
import DocumentHeaderMenuBar from "./document-header/DocumentHeaderMenuBar";

const DocumentHeader = () => {
  return (
    <section className="flex w-full px-2 py-3 items-center">
      <DocumentHeaderLogo />
      <div className="flex flex-col">
        <DocumentHeadedrInput />
        <DocumentHeaderMenuBar />
      </div>
    </section>
  );
};

export default DocumentHeader;
