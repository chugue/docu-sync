import { Editor } from "@tiptap/react";
import { create } from "zustand";

interface EditorState {
  editorState: Editor | null;
  zoomLevel: number;
  hasZoomLevelPopup: boolean;

  setEditorState: (editor: Editor) => void;
  setZoomLevel: (zoomLevel: number) => void;
  setHasZoomLevelPopup: (hasZoomLevelPopup: boolean) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  editorState: null,
  zoomLevel: 100,
  hasZoomLevelPopup: false,

  setEditorState: (editorState) => set({ editorState }),
  setZoomLevel: (zoomLevel) => set({ zoomLevel }),
  setHasZoomLevelPopup: (hasZoomLevelPopup) => set({ hasZoomLevelPopup }),
}));
