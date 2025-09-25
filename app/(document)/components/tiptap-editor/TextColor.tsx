import useOpenMotion from "@/shared/components/animations/use-open-motion";
import useColorPallettePopup from "@/shared/hooks/use-color-pallette-popup";
import { useEditorStore } from "@/shared/store/use-editor-store";
import { Editor, useEditorState } from "@tiptap/react";
import { Type } from "lucide-react";
import { RefObject, useRef } from "react";
import TextColorPalette from "./TextColorPalette";

const TextColor = ({ editor }: { editor: Editor }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { fontColor, colorPalettePopup, setFontColor, setColorPalettePopup } =
    useEditorStore();

  useOpenMotion({
    ref: ref as RefObject<HTMLDivElement>,
    isOpen: colorPalettePopup,
  });

  useEditorState({
    editor,
    selector: (state) => {
      const color = state.editor.getAttributes("textStyle").color;
      return color;
    },
  });

  useColorPallettePopup({
    ref: ref as RefObject<HTMLDivElement>,
    setColorPalettePopup,
    colorPalettePopup,
  });

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    editor.chain().focus().setColor(e.target.value).run();
    setFontColor(e.target.value);
    setColorPalettePopup(false);
  };

  const handleButtonClick = () => {
    setColorPalettePopup(true);
  };

  return (
    <div className="relative flex w-4 h-4 justify-center items-center">
      <div
        className="items-center justify-center w-3 h-3"
        onClick={handleButtonClick}
        onBlur={() => setColorPalettePopup(false)}
        onFocus={() => setColorPalettePopup(true)}
      >
        <div className="flex flex-col items-center justify-center gap-0.5 w-full">
          <Type className="size-3" />
          <div
            className="h-[3px] w-full rounded-md mb-1"
            style={{ backgroundColor: fontColor ?? "#000000" }}
          />
        </div>
      </div>

      {colorPalettePopup && (
        <TextColorPalette
          ref={ref as RefObject<HTMLDivElement>}
          fontColor={fontColor ?? "#000000"}
          handleColorChange={handleColorChange}
        />
      )}
    </div>
  );
};

export default TextColor;
