import { cn } from "@/shared/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Editor } from "@tiptap/react";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "lucide-react";

const TextAlignButton = ({ editor }: { editor: Editor }) => {
  const alignments = [
    {
      value: "left",
      icon: <AlignLeftIcon className="size-4" />,
    },
    {
      value: "center",
      icon: <AlignCenterIcon className="size-4" />,
    },
    {
      value: "right",
      icon: <AlignRightIcon className="size-4" />,
    },
    {
      value: "justify",
      icon: <AlignJustifyIcon className="size-4" />,
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-4 w-4 flex items-center justify-center rounded-sm text-sm flex-col shrink-0 p-0 leading-none">
          <AlignLeftIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="p-1 flex flex-row bg-white shadow-lg rounded-md gap-1"
          sideOffset={12}
          side="bottom"
        >
          {alignments.map(({ value, icon }) => {
            return (
              <button
                key={value}
                onClick={() => editor.chain().focus().setTextAlign(value).run()}
                className={cn(
                  "flex items-center rounded-sm hover:bg-neutral-200/80 p-2",
                  editor.isActive({ textAlign: value }) && "bg-neutral-200/80"
                )}
              >
                {icon}
              </button>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default TextAlignButton;
