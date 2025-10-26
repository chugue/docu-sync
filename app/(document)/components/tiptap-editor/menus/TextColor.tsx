import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Editor } from "@tiptap/react";
import { CirclePicker, ColorResult } from "react-color";

const TextColor = ({ editor }: { editor: Editor }) => {
  const value = editor.getAttributes("textStyle").color || "#000000";

  const onChange = (color: ColorResult) => {
    editor.chain().focus().setColor(color.hex).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-6 w-4 flex items-center justify-center rounded-sm text-sm flex-col shrink-0 p-0 leading-none">
          <span className="text-md font-bold">A</span>
          <div
            className="h-0.5 w-full rounded-md mt-0.5"
            style={{ backgroundColor: value }}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="p-2.5 bg-white shadow-lg rounded-lg"
          sideOffset={12}
          side="bottom"
        >
          <CirclePicker color={value} onChange={onChange} />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default TextColor;
