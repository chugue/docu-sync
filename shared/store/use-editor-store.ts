import { Editor } from "@tiptap/react";
import { create } from "zustand";

interface EditorState {
  editorState: Editor | null;
  zoomLevel: number;
  fontSize: number;
  fontColor: string | null;
  fontBackgroundColor: string | null;
  hasZoomLevelPopup: boolean;
  fontColorPalettePopup: boolean;
  fontBackgroundColorPopup: boolean;

  setEditorState: (editor: Editor) => void;
  setZoomLevel: (zoomLevel: number) => void;
  setFontSize: (fontSize: number) => void;
  setHasZoomLevelPopup: (hasZoomLevelPopup: boolean) => void;
  setFontColor: (fontColor: string) => void;
  setFontBackgroundColor: (fontBackgroundColor: string) => void;
  setFontColorPalettePopup: (fontColorPalettePopup: boolean) => void;
  setFontBackgroundColorPopup: (fontBackgroundColorPopup: boolean) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  editorState: null,
  zoomLevel: 100,
  fontSize: 16,
  fontColor: "#000000",
  fontBackgroundColor: "#FFFFFF",
  hasZoomLevelPopup: false,
  fontColorPalettePopup: false,
  fontBackgroundColorPopup: false,

  setEditorState: (editorState) => set({ editorState }),
  setZoomLevel: (zoomLevel) => set({ zoomLevel }),
  setFontSize: (fontSize) => set({ fontSize }),
  setHasZoomLevelPopup: (hasZoomLevelPopup) => set({ hasZoomLevelPopup }),
  setFontColor: (fontColor) => set({ fontColor }),
  setFontBackgroundColor: (fontBackgroundColor) => set({ fontBackgroundColor }),
  setFontColorPalettePopup: (colorPalettePopup) =>
    set({ fontColorPalettePopup: colorPalettePopup }),
  setFontBackgroundColorPopup: (fontBackgroundColorPopup) =>
    set({ fontBackgroundColorPopup }),
}));
