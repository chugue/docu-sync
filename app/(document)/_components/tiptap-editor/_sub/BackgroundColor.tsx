import useOpenMotion from "@/shared/hooks/animations/use-open-motion";
import useColorPallettePopup from "@/shared/hooks/use-color-pallette-popup";
import { useEditorStore } from "@/shared/store/use-editor-store";
import { Editor, useEditorState } from "@tiptap/react";
import { Highlighter } from "lucide-react";
import { RefObject, useRef } from "react";
import ColorPalette from "./ColorPalette";

const TextBackgroundColor = ({ editor }: { editor: Editor }) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    fontBackgroundColorPopup,
    setFontBackgroundColorPopup,
    setFontBackgroundColor,
  } = useEditorStore();

  useOpenMotion({
    ref: ref as RefObject<HTMLDivElement>,
    isOpen: fontBackgroundColorPopup,
  });

  const editorState = useEditorState({
    editor,
    selector: (state) => {
      const fontBackgroundColor =
        state.editor.getAttributes("textStyle").backgroundColor;
      return fontBackgroundColor;
    },
  });

  useColorPallettePopup({
    ref: ref as RefObject<HTMLDivElement>,
    colorPalettePopup: fontBackgroundColorPopup,
    setColorPalettePopup: setFontBackgroundColorPopup,
  });

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    editor.chain().focus().setBackgroundColor(e.target.value).run();
    setFontBackgroundColor(e.target.value);
    setFontBackgroundColorPopup(false);
  };

  const handleButtonClick = () => {
    setFontBackgroundColorPopup(true);
  };

  return (
    <div className="relative flex w-4 h-4 justify-center items-center cursor-pointer p-0">
      <div
        className="items-center justify-center w-3 h-3"
        onClick={handleButtonClick}
        onBlur={() => setFontBackgroundColorPopup(false)}
        onFocus={() => setFontBackgroundColorPopup(true)}
      >
        <div className="flex flex-col items-center justify-center gap-0.5 w-full">
          <Highlighter className="size-4" />
        </div>
      </div>

      {fontBackgroundColorPopup && (
        <ColorPalette
          ref={ref as RefObject<HTMLDivElement>}
          color={editorState ?? "#ffffff"}
          handleColorChange={handleColorChange}
        />
      )}
    </div>
  );
};

export default TextBackgroundColor;
