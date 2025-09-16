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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="text-sm p-0 m-0 bg-transparent inline-flex items-center">
          {Math.round(zoomLevel)}%
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute left-0 z-100 ">
        <DropdownMenuGroup className="grid w-[100px] gap-1 p-1">
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
                  className="w-full text-center rounded-sm px-2 py-1 data-[active=true]:bg-accent data-[active=true]:text-accent-foreground cursor-pointer"
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
