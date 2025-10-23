import { ChevronDownIcon } from "@/shared/components/tiptap-icons/chevron-down-icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { useEditorStore } from "@/shared/store/use-editor-store";
import {} from "@radix-ui/react-dropdown-menu";

const zoomLevels = [50, 75, 90, 100, 125, 150, 200];

const ZoomLevels = () => {
  const { zoomLevel, setZoomLevel, setHasZoomLevelPopup, hasZoomLevelPopup } =
    useEditorStore();

  return (
    <DropdownMenu
      open={hasZoomLevelPopup}
      onOpenChange={(open) => setHasZoomLevelPopup(open)}
    >
      <DropdownMenuTrigger asChild>
        <div className="flex flex-row gap-1 items-center px-0.5">
          <span className="text-sm  bg-transparent ">
            {Math.round(zoomLevel)}%
          </span>
          <span
            style={{
              display: "inline-block",
              transition: "transform 0.3s",
              transform: hasZoomLevelPopup ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <ChevronDownIcon className="size-3" />
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="absolute left-[-50px] z-100 min-w-[6rem] top-2 "
        align="center"
      >
        <DropdownMenuGroup className="grid w-auto gap-1">
          {zoomLevels.map((level) => {
            const label = `${level}%`;
            const isActive = zoomLevel === level;
            return (
              <DropdownMenuItem
                key={level}
                data-active={isActive}
                className="w-full"
              >
                <div
                  className="w-full text-center rounded-sm py-0.5 data-[active=true]:bg-accent data-[active=true]:text-accent-foreground cursor-pointer"
                  onClick={() => {
                    setZoomLevel(level);
                  }}
                >
                  {label}
                </div>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ZoomLevels;
