import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { cn } from "@/shared/lib/utils";
import { useEditorStore } from "@/shared/store/use-editor-store";
import { Editor } from "@tiptap/react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

const FontFamilyDropdowns = ({ editor }: { editor: Editor }) => {
  const { fontFamilyPopup, setFontFamilyPopup } = useEditorStore();

  const fonts = [
    { label: "Arial", value: "Arial" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Courier New", value: "Courier New" },
    { label: "Georgia", value: "Georgia" },
    { label: "Verdana", value: "Verdana" },
  ];

  return (
    <DropdownMenu
      open={fontFamilyPopup}
      onOpenChange={(open) => setFontFamilyPopup(open)}
    >
      <DropdownMenuTrigger asChild>
        <button
          className={
            "h-4 w-[60px] flex items-center justify-between rounded-sm text-sm"
          }
        >
          <span className="truncate">
            {editor.getAttributes("textStyle").fontFamily || "Arial"}
          </span>
          <span
            style={{
              display: "inline-block",
              transition: "transform 0.3s",
              transform: fontFamilyPopup ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <ChevronDownIcon className="size-3" />
          </span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={12}
        side="bottom"
        className="p-1 flex flex-col gap-1 top-2 -ml-2"
      >
        {fonts.map(({ label, value }) => (
          <DropdownMenuItem
            key={label}
            className={cn(
              "flex flex-row justify-between",
              editor.getAttributes("textStyle").fontFamily === value &&
                "bg-neutral-200/80"
            )}
          >
            <span
              className={`cursor-pointer`}
              style={{
                fontFamily: value,
              }}
              onClick={() => {
                if (value === "Arial") {
                  // Arial은 기본 폰트이므로 unset 사용
                  editor.chain().focus().unsetFontFamily().run();
                } else {
                  editor.chain().focus().setFontFamily(value).run();
                }
                setFontFamilyPopup(false);
              }}
            >
              {label}
            </span>
            <span>
              {(value === editor.getAttributes("textStyle").fontFamily ||
                (value === "Arial" &&
                  !editor.getAttributes("textStyle").fontFamily)) && (
                <CheckIcon className="size-4" />
              )}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FontFamilyDropdowns;
