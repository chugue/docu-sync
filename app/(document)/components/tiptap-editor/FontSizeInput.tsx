import useOpenMotion from "@/shared/components/animations/use-open-motion";
import { Input } from "@/shared/components/ui/input";
import { useEditorStore } from "@/shared/store/use-editor-store";

import { Editor } from "@tiptap/react";

import { RefObject, useEffect, useRef, useState } from "react";

const FONT_SIZES = [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96];

const FontSizeInput = ({ editor }: { editor: Editor }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOpenMotion({ ref: ref as RefObject<HTMLDivElement>, isOpen });
  const { fontSize, setFontSize } = useEditorStore();
  const [inputValue, setInputValue] = useState<string | number>(fontSize ?? "");

  useEffect(() => {
    setInputValue(fontSize ?? "");
  }, [fontSize]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const applyFontSize = () => {
    const newValue = parseInt(inputValue as string, 10);
    if (isNaN(newValue)) return setInputValue(fontSize ?? "");
    setFontSize(editor, newValue);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      applyFontSize();
      e.currentTarget.blur();
    }
  };

  return (
    <div className="relative inline-block">
      <Input
        value={inputValue}
        onFocus={() => setIsOpen(true)}
        onBlur={applyFontSize}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="w-10 p-0 text-center bg-gray-50 m-0"
      />
      {isOpen && (
        <div
          ref={ref}
          role="menu"
          aria-label="font-size-suggestions"
          className="absolute left-[-15px] z-100 min-w-[4.5rem] top-10 p-1 bg-white rounded-md shadow-md border border-gray-200 popup"
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
