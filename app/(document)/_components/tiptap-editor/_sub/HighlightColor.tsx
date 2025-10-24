import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Editor } from "@tiptap/react";
import { HighlighterIcon } from "lucide-react";
import { CirclePicker, ColorResult } from "react-color";

const HighlightColor = ({ editor }: { editor: Editor }) => {
  const value = editor.getAttributes("highlight").color || "#FFFFFF";

  const onChange = (color: ColorResult) => {
    editor.chain().focus().setHighlight({ color: color.hex }).run();
  };

  const colors = [
    "#FFFFFF",
    "#000000",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-4 w-4 flex items-center justify-center rounded-sm text-sm flex-col shrink-0 p-0 leading-none">
          <HighlighterIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="p-2.5 bg-white shadow-lg rounded-lg"
          sideOffset={12}
          side="bottom"
        >
          <CirclePicker color={value} onChange={onChange} colors={colors} />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default HighlightColor;
