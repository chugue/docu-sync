// shared/hooks/use-set-link.ts
import { Editor } from "@tiptap/react";

const setLink = (editor: Editor | null) => {
  if (!editor) return;

  const previousUrl = editor.getAttributes("link").href;
  const url = window.prompt("URL", previousUrl);

  // cancelled
  if (url === null) {
    return;
  }

  // empty
  if (url === "") {
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    return;
  }

  const formattedUrl = url.match(/^https?:\/\//) ? url : `https://${url}`;

  // update link
  try {
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: formattedUrl })
      .run();
  } catch (e: any) {
    alert(e.message);
  }
};

export default setLink;
