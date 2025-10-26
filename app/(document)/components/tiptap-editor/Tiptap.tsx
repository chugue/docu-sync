"use client";

import { LineHeightExtension } from "@/shared/components/tiptap/module/tiptap-line-height";
import { useEditorStore } from "@/shared/store/use-editor-store";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import FileHandler from "@tiptap/extension-file-handler";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import {
  BulletList,
  ListItem,
  OrderedList,
  TaskItem,
  TaskList,
} from "@tiptap/extension-list";
import { TableKit } from "@tiptap/extension-table";
import TextAlign from "@tiptap/extension-text-align";
import {
  Color,
  FontFamily,
  FontSize,
  TextStyleKit,
} from "@tiptap/extension-text-style";
import { CharacterCount, Selection } from "@tiptap/extensions";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Ruler from "../document-body/ruler";
import TiptapMenubar from "./TiptapMenuHeader";

const Tiptap = () => {
  const { editorState, setEditorState, zoomLevel, spellCheck } =
    useEditorStore();

  useEditor({
    immediatelyRender: false,
    editorProps: {
      attributes: {
        style: "padding-left: 56px, padding-right: 56px",
        class: `focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] py-10 px-14 cursor-text ${
          spellCheck ? "spellcheck" : "no-spellcheck"
        }`,
      },
    },
    extensions: [
      CodeBlock.configure({
        enableTabIndentation: true,
        tabSize: 2,
      }),
      StarterKit,
      TextStyleKit,
      FontSize,
      FontFamily,
      LineHeightExtension,
      Color,
      Code.configure({
        HTMLAttributes: {
          class: "inline-code",
        },
      }),
      Highlight.configure({
        multicolor: true,
      }),
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
      Link.configure({
        openOnClick: false,
        enableClickSelection: true,
        autolink: false,
        defaultProtocol: "https",
        protocols: ["https"],
        isAllowedUri: (url, ctx) => {
          try {
            // construct URL
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`${ctx.defaultProtocol}://${url}`);

            console.log(parsedUrl.href);

            // use default validation
            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false;
            }

            // disallowed protocols
            const disallowedProtocols = ["ftp", "file", "mailto"];
            const protocol = parsedUrl.protocol.replace(":", "");

            if (disallowedProtocols.includes(protocol)) {
              return false;
            }

            // only allow protocols specified in ctx.protocols
            const allowedProtocols = ctx.protocols.map((p) =>
              typeof p === "string" ? p : p.scheme
            );

            if (!allowedProtocols.includes(protocol)) {
              return false;
            }

            // disallowed domains
            const disallowedDomains = [
              "example-phishing.com",
              "malicious-site.net",
            ];
            const domain = parsedUrl.hostname;

            if (disallowedDomains.includes(domain)) {
              return false;
            }

            // all checks have passed
            return true;
          } catch {
            return false;
          }
        },
        shouldAutoLink: (url) => {
          try {
            // construct URL
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`https://${url}`);

            // only auto-link if the domain is not in the disallowed list
            const disallowedDomains = [
              "example-no-autolink.com",
              "another-no-autolink.com",
            ];
            const domain = parsedUrl.hostname;

            return !disallowedDomains.includes(domain);
          } catch {
            return false;
          }
        },
      }),
    ],
    content: `
    <p>
      Wow, this editor has support for links to the whole <a href="https://en.wikipedia.org/wiki/World_Wide_Web">world wide web</a>. We tested a lot of URLs and I think you can add *every URL* you want. Isn’t that cool? Let’s try <a href="https://statamic.com/">another one!</a> Yep, seems to work.
    </p>
    <p>
      By default every link will get a <code>rel="noopener noreferrer nofollow"</code> attribute. It’s configurable though.
    </p>
  `,
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
      <Ruler />
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
