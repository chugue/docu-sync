import { HeadingDropdownMenu } from "@/components/tiptap-ui/heading-dropdown-menu";
import { Editor } from "@tiptap/react";

const Headings = ({ editor }: { editor: Editor }) => {
  return (
    <HeadingDropdownMenu
      editor={editor}
      levels={[1, 2, 3, 4]}
      hideWhenUnavailable={true}
      portal={false}
    />
  );
};

export default Headings;
