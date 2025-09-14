import { Editor } from "@tiptap/react";
import { create } from "zustand";

interface EditorState {
  editorState: Editor | null;
  setEditorState: (editor: Editor) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  editorState: null,
  setEditorState: (editorState) => set({ editorState }),
}));
