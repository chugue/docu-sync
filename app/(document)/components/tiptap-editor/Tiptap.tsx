"use client";

import { useEditorStore } from "@/shared/store/use-editor-store";
import FileHandler from "@tiptap/extension-file-handler";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import {
  BulletList,
  ListItem,
  OrderedList,
  TaskItem,
  TaskList,
} from "@tiptap/extension-list";
import { TableKit } from "@tiptap/extension-table";
import TextAlign from "@tiptap/extension-text-align";
import { FontSize, TextStyleKit } from "@tiptap/extension-text-style";
import { CharacterCount, Selection } from "@tiptap/extensions";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapMenubar from "./TiptapMenubar";

const Tiptap = () => {
  const { editorState, setEditorState, zoomLevel } = useEditorStore();

  useEditor({
    editorProps: {
      attributes: {
        style: "padding-left: 56px, padding-right: 56px",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] py-10 px-14 cursor-text",
      },
    },
    extensions: [
      StarterKit,
      TextStyleKit,
      FontSize,
      Highlight,
      Selection.configure({
        className: "selection",
      }),
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
      TableKit.configure({
        table: { resizable: true },
      }),
      Image.configure({
        inline: true,
      }),
      CharacterCount.configure(),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      FileHandler.configure({
        allowedMimeTypes: [
          "image/png",
          "image/jpeg",
          "image/gif",
          "image/webp",
        ],
        onDrop: (currentEditor, files, pos) => {
          files.forEach((file) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              currentEditor
                .chain()
                .insertContentAt(pos, {
                  type: "image",
                  attrs: {
                    src: fileReader.result,
                  },
                })
                .focus()
                .run();
            };
          });
        },
        onPaste: (currentEditor, files, htmlContent) => {
          files.forEach((file) => {
            if (htmlContent) {
              // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
              // you could extract the pasted file from this url string and upload it to a server for example
              console.log(htmlContent); // eslint-disable-line no-console
              return false;
            }

            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              currentEditor
                .chain()
                .insertContentAt(currentEditor.state.selection.anchor, {
                  type: "image",
                  attrs: {
                    src: fileReader.result,
                  },
                })
                .focus()
                .run();
            };
          });
        },
      }),
    ],
    // content: document,
    content: `
    <p>Adjusting font sizes can greatly affect the readability of your text, making it easier for users to engage with your content.</p>
    <p>When designing a website, it's crucial to balance large headings and smaller body text for a clean, organized layout.</p>
    <p>When setting font sizes, it's important to consider accessibility, ensuring that text is readable for users with different visual impairments.</p>
    <p><span style="font-size: 10px">Too small</span> a font size can strain the eyes, while <span style="font-size: 40px">too large</span> can disrupt the flow of the design.</p>
    <p>When designing for mobile, font sizes should be adjusted to maintain readability on smaller screens.</p>
  `,
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    onCreate: ({ editor }) => {
      setEditorState(editor);
    },
    onUpdate: ({ editor }) => {
      // console.log(editor.getJSON());
      setEditorState(editor);
    },
    onSelectionUpdate: ({ editor }) => {
      setEditorState(editor);
    },
  });

  return (
    <div className="size-full overflow-x-auto print:p-0 print:bg-white print:overflow-visible">
      <TiptapMenubar editor={editorState} />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <div
          className="w-[816px]"
          style={{
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: "top center",
          }}
        >
          <EditorContent editor={editorState} />
        </div>
      </div>
    </div>
  );
};

export default Tiptap;
