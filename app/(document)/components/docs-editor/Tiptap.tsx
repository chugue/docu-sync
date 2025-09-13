"use client";

import Highlight from "@tiptap/extension-highlight";
import { BulletList, ListItem, OrderedList } from "@tiptap/extension-list";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapMenubar from "./TiptapMenubar";

interface DocumentEditorProps {
  document: string;
  setDocument: (document: string) => void;
  onChange: (content: string) => void;
}

const Tiptap = ({ document, setDocument, onChange }: DocumentEditorProps) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: "padding-left: 56px, padding-right: 56px",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] py-10 px-14 cursor-text",
      },
    },
    extensions: [
      StarterKit,
      Highlight,
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc ml-3",
        },
      }),
      ListItem,
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal ml-3",
        },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: document,
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      // console.log(editor.getJSON());
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="size-full overflow-x-auto print:p-0 print:bg-white print:overflow-visible">
      <TiptapMenubar editor={editor} />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
