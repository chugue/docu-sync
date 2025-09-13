"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import DocumentHeadedrInput from "./document-header/DocumentHeadedrInput";
import DocumentHeaderLogo from "./document-header/DocumentHeaderLogo";
import DocumentHeaderMenuBar from "./document-header/DocumentHeaderMenuBar";

const DocumentHeader = () => {
  return (
    <header className="flex w-full px-2 py-3 items-center print:hidden flex-row justify-between">
      <div className="flex flex-row items-center gap-2">
        <DocumentHeaderLogo />
        <div className="flex flex-col">
          <DocumentHeadedrInput />
          <DocumentHeaderMenuBar />
        </div>
      </div>
      <SignedIn>
        <div className="flex items-center scale-150 justify-center mx-4">
          <UserButton />
        </div>
      </SignedIn>
    </header>
  );
};

export default DocumentHeader;
