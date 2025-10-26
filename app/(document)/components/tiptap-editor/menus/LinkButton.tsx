import { Input } from "@/shared/components/tiptap/tiptap-ui-primitive/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Editor } from "@tiptap/react";
import { Link } from "lucide-react";
import { useState } from "react";

const LinkButton = ({ editor }: { editor: Editor }) => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (href: string) => {
    let normalizedHref = href.trim();
    if (
      !normalizedHref.startsWith("http://") &&
      !normalizedHref.startsWith("https://") &&
      !normalizedHref.startsWith("/") &&
      !normalizedHref.startsWith("#")
    ) {
      normalizedHref = `https://${normalizedHref}`;
    }
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: normalizedHref })
      .run();
    setValue("");
    setIsOpen(false);
  };
  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={(open) => {
        if (open) {
          setValue(editor.getAttributes("link").href || "");
        } else {
          setValue("");
        }
        setIsOpen(open);
      }}
    >
      <DropdownMenuTrigger asChild>
        <button className="h-4 w-4 flex items-center justify-center rounded-sm text-sm flex-col shrink-0 p-0 leading-none">
          <Link className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="p-2.5 flex items-center gap-2 bg-white shadow-lg rounded-lg"
          sideOffset={12}
          side="bottom"
        >
          <Input
            placeholder="https://example.com"
            value={value || ""}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && value) {
                e.preventDefault();
                onChange(e.currentTarget.value);
              }
            }}
            className="border-border border-1 rounded-md w-full p-0"
          />
          <button
            onClick={() => onChange(value || "")}
            className="w-fit whitespace-nowrap bg-gray-800  text-white px-3 py-2 rounded-md text-xs font-bold"
          >
            적용
          </button>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default LinkButton;
