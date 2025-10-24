import { cn } from "@/shared/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Editor } from "@tiptap/react";
import { List, ListOrdered } from "lucide-react";

const ListButton = ({ editor }: { editor: Editor }) => {
  const lists = [
    {
      label: "Bullet List",
      icon: <List className="size-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
    },
    {
      label: "Ordered List",
      icon: <ListOrdered className="size-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-4 w-4 flex items-center justify-center rounded-sm text-sm flex-col shrink-0 p-0 leading-none">
          <List className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="p-1 flex flex-row bg-white shadow-lg rounded-md gap-1"
          sideOffset={12}
          side="bottom"
        >
          {lists.map(({ label, icon, onClick, isActive }) => {
            return (
              <button
                key={label}
                onClick={onClick}
                className={cn(
                  "flex items-center rounded-sm hover:bg-neutral-200/80 p-2",
                  isActive ? "bg-neutral-200/80" : "bg-transparent"
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

export default ListButton;
