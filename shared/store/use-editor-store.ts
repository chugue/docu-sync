import { Editor } from "@tiptap/react";
import { create } from "zustand";

interface EditorState {
  editorState: Editor | null;
  zoomLevel: number;
  fontSize: number | null;
  fontColor: string | null;
  hasZoomLevelPopup: boolean;
  colorPalettePopup: boolean;

  setEditorState: (editor: Editor) => void;
  setZoomLevel: (zoomLevel: number) => void;
  setFontSize: (editor: Editor, fontSize: number) => void;
  setHasZoomLevelPopup: (hasZoomLevelPopup: boolean) => void;
  setFontColor: (fontColor: string) => void;
  setColorPalettePopup: (colorPalettePopup: boolean) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  editorState: null,
  zoomLevel: 100,
  fontSize: 12,
  fontColor: "#000000",
  hasZoomLevelPopup: false,
  colorPalettePopup: false,

  setEditorState: (editorState) => set({ editorState }),
  setZoomLevel: (zoomLevel) => set({ zoomLevel }),
  setFontSize: (editor, fontSize) =>
    set(() => {
      if (fontSize === null) return { fontSize: null };
      const value = `${fontSize}px`;
      editor.chain().focus().setFontSize(value).run();
      editor.isActive("textStyle", { fontSize: value });
      return { fontSize };
    }),
  setHasZoomLevelPopup: (hasZoomLevelPopup) => set({ hasZoomLevelPopup }),
  setFontColor: (fontColor) => set({ fontColor }),
  setColorPalettePopup: (colorPalettePopup) => set({ colorPalettePopup }),
}));
