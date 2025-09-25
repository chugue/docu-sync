"use client";

import { cn } from "@/shared/lib/utils";
import { useEditorStore } from "@/shared/store/use-editor-store";
import { Toggle } from "@radix-ui/react-toggle";
import { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Minus,
  Plus,
  Printer,
  Redo2,
  Strikethrough,
  Underline,
  Undo2,
} from "lucide-react";
import FontSizeInput from "./FontSizeInput";
import MenuSeperator from "./MenuSeperator";
import TextColor from "./TextColor";
import ZoomLevels from "./ZoomLevels";

interface TiptapMenubarIcons {
  icon: React.ReactNode;
  name: string;
  onClick: () => void;
  pressed?: boolean;
  desc?: string;
}

const TiptapMenubar = ({ editor }: { editor: Editor | null }) => {
  const { hasZoomLevelPopup, colorPalettePopup, fontSize, setFontSize } =
    useEditorStore();

  if (!editor) return null;

  const options: TiptapMenubarIcons[] = [
    {
      icon: <Undo2 className="size-4" />,
      name: "undo",
      onClick: () => editor.chain().focus().undo().run(),
      desc: "실행취소(⌘Z)",
    },
    {
      icon: <Redo2 className="size-4" />,
      name: "redo",
      onClick: () => editor.chain().focus().redo().run(),
      desc: "재실행(⌘⇧Z)",
    },
    {
      icon: <Printer className="size-4" />,
      name: "print",
      onClick: () => {
        if (typeof window !== "undefined") window.print();
      },
      desc: "인쇄(⌘P)",
    },
    {
      icon: <ZoomLevels />,
      name: "zoom",
      onClick: () => {
        console.log("100%");
      },
      desc: hasZoomLevelPopup ? undefined : "확대/축소",
    },
    {
      icon: <MenuSeperator />,
      name: "seperator",
      onClick: () => {},
    },
    {
      icon: <Minus className="size-4" />,
      name: "font-size-minus",
      onClick: () => setFontSize(editor, fontSize! - 1),
    },
    {
      icon: <FontSizeInput editor={editor} />,
      name: "font-size-input",
      onClick: () => {},
    },
    {
      icon: <Plus className="size-4" />,
      name: "font-size-minus",
      onClick: () => setFontSize(editor, fontSize! + 1),
    },
    {
      icon: <MenuSeperator />,
      name: "seperator",
      onClick: () => {},
    },
    {
      icon: <Heading1 className="size-4" />,
      name: "heading1",
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 className="size-4" />,
      name: "heading2",
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3 className="size-4" />,
      name: "heading3",
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <MenuSeperator />,
      name: "seperator",
      onClick: () => {},
    },
    {
      icon: <Bold className="size-4" />,
      name: "bold",
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive("bold"),
    },
    {
      icon: <Italic className="size-4" />,
      name: "italic",
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive("italic"),
    },
    {
      icon: <Underline className="size-4 " />,
      name: "underline",
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      pressed: editor.isActive("underline") ? true : false,
    },
    {
      icon: <TextColor editor={editor} />,
      name: "text-color",
      onClick: () => {},
      desc: colorPalettePopup ? undefined : "텍스트 색상",
    },
    {
      icon: <Strikethrough className="size-4" />,
      name: "strike",
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive("strike"),
    },
    {
      icon: <MenuSeperator />,
      name: "seperator",
      onClick: () => {},
    },
    {
      icon: <AlignLeft className="size-4" />,
      name: "alignLeft",
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      pressed: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <AlignCenter className="size-4" />,
      name: "alignCenter",
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      pressed: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <AlignRight className="size-4" />,
      name: "alignRight",
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      pressed: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <List className="size-4" />,
      name: "bulletList",
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive("bulletList"),
    },
    {
      icon: <ListOrdered className="size-4" />,
      name: "orderedList",
      onClick: () => editor.chain().focus().toggleOrderedList().run(),

      pressed: editor.isActive("orderedList"),
    },
    {
      icon: <Highlighter className="size-4" />,
      name: "highlight",
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      pressed: editor.isActive("highlight"),
      desc: "하이라이트",
    },
  ];

  return (
    <div className="px-5 print:hidden">
      <div className="flex rounded-md p-1 mb-1 space-x-1 z-50 bg-tiptap-menu-background items-center">
        {options.map((option, index) => (
          <div
            key={index}
            className={cn(
              `flex relative group hover:bg-muted-foreground/10 rounded-md items-center`,
              option.name === "zoom" ? "p-1" : "p-2",
              option.name === "seperator" && "p-0",
              option.name === "font-size-input" && "p-0",
              option.name === "text-color" && "p-1 px-2"
            )}
          >
            {option.name === "seperator" ? (
              <MenuSeperator />
            ) : (
              <Toggle
                pressed={option.pressed ?? false}
                onPressedChange={option.onClick}
                className="items-center"
              >
                {option.icon}
                {option.desc && (
                  <span
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[12px] bg-black text-white rounded-sm px-2 py-1 opacity-0 group-hover:opacity-100
              pointer-events-none z-60 transition-opacity duration-300 whitespace-nowrap font-semibold
              tracking-wider"
                  >
                    {option.desc}
                  </span>
                )}
              </Toggle>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TiptapMenubar;
