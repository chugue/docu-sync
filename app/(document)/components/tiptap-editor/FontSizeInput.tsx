import { Input } from "@/shared/components/ui/input";
import useOpenMotion from "@/shared/hooks/animations/use-open-motion";
import { useEditorStore } from "@/shared/store/use-editor-store";
import { toast } from "sonner";

import { Editor, useEditorState } from "@tiptap/react";

import { RefObject, useEffect, useRef, useState } from "react";

const FONT_SIZES = [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96];

const FontSizeInput = ({ editor }: { editor: Editor }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { fontSize, setFontSize } = useEditorStore();

  const editorState = useEditorState({
    editor,
    selector: (state) => {
      const fontSize = state.editor.getAttributes("textStyle").fontSize;
      if (fontSize && typeof fontSize === "string") {
        return fontSize.replace("px", "");
      }
      return fontSize;
    },
  });

  useOpenMotion({ ref: ref as RefObject<HTMLDivElement>, isOpen });

  // 텍스트 선택시 inputValue만 업데이트
  useEffect(() => {
    console.log("editorState", editorState);
    setFontSize(editorState ?? 16);
  }, [editorState]);

  // 사용자가 input필드에 타이핑 할때
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;

    // 숫자가 아닌 경우만 에러 표시
    if (isNaN(+value)) {
      toast.error("글씨 크기는 정수로만 입력해주세요.", {
        duration: 2000,
      });
      return;
    }
    setFontSize(+value);
  };

  // 1. 다른 텍스트를 선택하면 해당 글씨 크기가 setInputValue에 들어감
  // 2. 그런데 다른 곳 글씨를 선택하면 setInputValue에 새로운 값이 들어감
  // 3. inputValue가 바뀐 것으로만으로 폰트사이즈를 set하면안됨
  // 4. 사용자의 선택 예를들어 +,-버튼을 누르거나 preset 값 버튼을 누를때만 setFontSize를 호출해야함

  const applyFontSize = (fontSize: number) => {
    if (!fontSize || fontSize < 1) return;
    setFontSize(fontSize);
    editor.chain().focus().setFontSize(`${fontSize}px`).run();
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isNaN(+fontSize)) {
      applyFontSize(fontSize);
      e.currentTarget.blur();
    }
  };

  const displayValue =
    isNaN(fontSize) || fontSize === null || fontSize === undefined
      ? 16
      : fontSize;

  return (
    <div className="relative inline-block">
      <Input
        value={displayValue}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
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
          {FONT_SIZES.map((size, index) => (
            <div
              key={index}
              role="menuitem"
              aria-label={`font-size-${size}`}
              className="px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-sm text-sm block w-full"
              onMouseDown={(e) => {
                e.preventDefault();
                setFontSize(size);
                editor.chain().focus().setFontSize(`${size}px`).run();
                setIsOpen(false);
              }}
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
