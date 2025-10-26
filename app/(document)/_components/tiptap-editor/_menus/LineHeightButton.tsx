import { cn } from "@/shared/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Editor } from "@tiptap/react";
import { ListCollapseIcon } from "lucide-react";

const LineHeightButton = ({ editor }: { editor: Editor }) => {
  const lineHeights = [
    {
      label: "Default",
      value: "normal",
    },
    {
      label: "Single",
      value: "1",
    },
    {
      label: "1.15",
      value: "1.15",
    },
    {
      label: "1.5",
      value: "1.5",
    },
    {
      label: "Double",
      value: "2",
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-4 w-4 flex items-center justify-center rounded-sm text-sm flex-col shrink-0 p-0 leading-none">
          <ListCollapseIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="p-1 flex flex-col bg-white shadow-lg rounded-md gap-1 "
          sideOffset={12}
          side="bottom"
        >
          {lineHeights.map(({ label, value }) => {
            return (
              <button
                key={value}
                onClick={() =>
                  editor.chain().focus().setLineHeight(value).run()
                }
                className={cn(
                  "flex items-center rounded-sm hover:bg-neutral-200/80 p-2",
                  editor.getAttributes("paragraph").lineHeight === value &&
                    "bg-neutral-200/80"
                )}
              >
                <span className="text-sm">{label}</span>
              </button>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default LineHeightButton;
