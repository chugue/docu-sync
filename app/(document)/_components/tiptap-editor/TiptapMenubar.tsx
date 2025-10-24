"use client";

import { CodeBlockIcon } from "@/components/tiptap-icons/code-block-icon";
import setLink from "@/shared/helpers/set-link";
import { cn } from "@/shared/lib/utils";
import { useEditorStore } from "@/shared/store/use-editor-store";
import { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Link,
  List,
  ListOrdered,
  MessageSquareIcon,
  Minus,
  Plus,
  Printer,
  Redo2,
  RemoveFormattingIcon,
  SpellCheckIcon,
  Strikethrough,
  Underline,
  Undo2,
} from "lucide-react";
import FontFamilyDropdowns from "./_sub/FontFamilyDropdowns";
import FontSizeInput from "./_sub/FontSizeInput";
import HeadingDropDowns from "./_sub/Headings";
import HighlightColor from "./_sub/HighlightColor";
import MenuSeperator from "./_sub/MenuSeperator";
import TextColor from "./_sub/TextColor";
import ZoomLevels from "./_sub/ZoomLevels";

interface TiptapMenubarIcons {
  icon: React.ReactNode;
  name: string;
  onClick?: () => void;
  pressed?: boolean;
  desc?: string;
}

const TiptapMenubar = ({ editor }: { editor: Editor | null }) => {
  const {
    hasZoomLevelPopup,
    fontColorPalettePopup: colorPalettePopup,
    fontSize,
    spellCheck,
    setFontSize,
    setSpellCheck,
  } = useEditorStore();

  if (!editor) return null;

  /**
   * TODO: 코멘트 추가, 이미지 삽입, 글 자간 높이 조절
   */

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
      icon: <SpellCheckIcon className="size-4" />,
      name: "spell-check",
      onClick: () => {
        const newValue = !spellCheck;
        setSpellCheck(newValue);

        if (editor?.view?.dom) {
          editor.view.dom.setAttribute("spellcheck", String(newValue));
          editor.view.dom.blur();
          editor.view.dom.focus();
        }
      },
      pressed: spellCheck,
      desc: "맞춤법 검사",
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
      onClick: () => {
        const currentSize = editor.getAttributes("textStyle").fontSize;
        if (currentSize && typeof currentSize === "string") {
          currentSize.replace("px", "");
          setFontSize(+currentSize);
        }
        const newFontSize = +fontSize - 1;
        editor.chain().focus().setFontSize(`${newFontSize}px`).run();
      },
    },
    {
      icon: <FontSizeInput editor={editor} />,
      name: "font-size-input",
      onClick: () => {},
    },
    {
      icon: <Plus className="size-4" />,
      name: "font-size-plus",
      onClick: () => {
        const currentSize = editor.getAttributes("textStyle").fontSize;
        if (currentSize && typeof currentSize === "string") {
          currentSize.replace("px", "");
          setFontSize(+currentSize);
        }
        const newFontSize = +fontSize + 1;
        editor.chain().focus().setFontSize(`${newFontSize}px`).run();
      },
    },
    {
      icon: <MenuSeperator />,
      name: "seperator",
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      pressed: editor.isActive("codeBlock"),
    },
    {
      icon: <FontFamilyDropdowns editor={editor} />,
      name: "font-family",
      onClick: () => {},
    },
    {
      icon: <HeadingDropDowns editor={editor} />,
      name: "headings",
      onClick: () => {},
    },
    {
      icon: <CodeBlockIcon className="size-4" />,
      name: "code-block",
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      pressed: editor.isActive("codeBlock"),
    },

    {
      icon: <Link className="size-4" />,
      name: "link",
      onClick: () => setLink(editor),
      pressed: editor.isActive("link"),
    },
    {
      icon: <MenuSeperator />,
      name: "seperator",
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      pressed: editor.isActive("codeBlock"),
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
      pressed: editor.isActive("underline"),
    },
    {
      icon: <TextColor editor={editor} />,
      name: "text-color",
      onClick: () => {},
      pressed: editor.getAttributes("textStyle").color,
      desc: colorPalettePopup ? undefined : "텍스트 색상",
    },
    {
      icon: <HighlightColor editor={editor} />,
      name: "highlight-color",
      onClick: () => {},
      pressed: editor.getAttributes("textStyle").backgroundColor,
      desc: colorPalettePopup ? undefined : "하이라이트",
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
      icon: <MessageSquareIcon className="size-4" />,
      name: "comment",
      onClick: () => {},
      pressed: false,
    },
    {
      icon: <RemoveFormattingIcon className="size-4" />,
      name: "remove-formatting",
      onClick: () => editor.chain().focus().unsetAllMarks().run(),
    },
  ];

  return (
    <div className="px-5 print:hidden">
      <div className="flex rounded-md p-1 mb-1 space-x-1 z-50 bg-tiptap-menu-background items-center">
        {options.map((option, index) => (
          <div
            key={index}
            className={cn(
              `flex relative group hover:bg-muted-foreground/10 rounded-md items-center p-2`,
              option.pressed &&
                "bg-muted-foreground/10 transition-all duration-300",
              option.name === "zoom" && "p-1 py-2",
              option.name === "seperator" && "p-0",
              option.name === "font-size-input" && "p-0",
              option.name === "text-color" && "p-1 px-2",
              option.name === "headings" && "p-1 py-2"
            )}
          >
            {option.name === "seperator" ? (
              <MenuSeperator />
            ) : (
              <div
                onMouseDown={option.onClick}
                className={cn(
                  "items-center hover:bg-transparent transition-colors",
                  option.pressed && "text-primary"
                )}
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
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TiptapMenubar;
