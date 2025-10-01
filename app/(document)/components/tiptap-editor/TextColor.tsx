import useOpenMotion from "@/shared/hooks/animations/use-open-motion";
import useColorPallettePopup from "@/shared/hooks/use-color-pallette-popup";
import { useEditorStore } from "@/shared/store/use-editor-store";
import { Editor, useEditorState } from "@tiptap/react";
import { Type } from "lucide-react";
import { RefObject, useRef } from "react";
import ColorPalette from "./ColorPalette";

const TextColor = ({ editor }: { editor: Editor }) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    fontColor,
    fontColorPalettePopup: colorPalettePopup,
    setFontColor,
    setFontColorPalettePopup: setColorPalettePopup,
  } = useEditorStore();

  useOpenMotion({
    ref: ref as RefObject<HTMLDivElement>,
    isOpen: colorPalettePopup,
  });

  const editorState = useEditorState({
    editor,
    selector: (state) => {
      const fontColor = state.editor.getAttributes("textStyle").color;
      console.log(fontColor);
      return fontColor;
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
    <div className="relative flex w-4 h-4 justify-center items-center cursor-pointer my-0.5">
      <div
        className="items-center justify-center w-3 h-3"
        onClick={handleButtonClick}
        onBlur={() => setColorPalettePopup(false)}
        onFocus={() => setColorPalettePopup(true)}
      >
        <div className="flex flex-col items-center justify-center gap-0.5 w-full">
          <Type className="size-3" />
          <div
            className="h-[3px] w-full rounded-md "
            style={{
              backgroundColor: editorState
                ? editorState !== ""
                  ? editorState
                  : "#000000"
                : "#000000",
            }}
          />
        </div>
      </div>

      {colorPalettePopup && (
        <ColorPalette
          ref={ref as RefObject<HTMLDivElement>}
          color={editorState ?? "#000000"}
          handleColorChange={handleColorChange}
        />
      )}
    </div>
  );
};

export default TextColor;
