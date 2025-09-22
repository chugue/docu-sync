import { Input } from "@/shared/components/ui/input";
import { useEditorStore } from "@/shared/store/use-editor-store";

import { useGSAP } from "@gsap/react";
import { Editor } from "@tiptap/react";
import gsap from "gsap";

import { useState } from "react";

const FONT_SIZES = [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96];

const FontSizeInput = ({ editor }: { editor: Editor }) => {
  const [open, setOpen] = useState(false);
  const { fontSize, setFontSize } = useEditorStore();

  useGSAP(() => {
    if (!open) return;
    gsap.from(".popup", {
      opacity: 0,
      duration: 0.1,
      y: -30,
      scale: 0.95,
    });
  }, [open]);

  return (
    <div className="relative inline-block">
      <Input
        value={fontSize}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onChange={(e) => setFontSize(editor, parseInt(e.target.value))}
        className="w-10 p-0 text-center bg-gray-50 m-0"
      />
      {open && (
        <div
          role="menu"
          aria-label="font-size-suggestions"
          className="absolute left-[-11px] z-100 min-w-[4.5rem] top-10 p-1 bg-white rounded-md shadow-md border border-gray-200 popup"
        >
          {FONT_SIZES.map((size) => (
            <div
              key={size}
              role="menuitem"
              aria-label={`font-size-${size}`}
              className="px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-sm text-sm "
              onClick={() => setFontSize(editor, size)}
            >
              {size}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FontSizeInput;
