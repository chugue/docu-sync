// 👈 컬러 팔레트 색상 정의
import { COLOR_PALETTE } from "@/shared/constants/color-palette";
import { cn } from "@/shared/lib/utils";
import { useEditorStore } from "@/shared/store/use-editor-store";
import { Check } from "lucide-react";

export interface ColorPaletteProps {
  ref: React.RefObject<HTMLDivElement>;
  color: string;
  handleColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ColorPalette = ({ ref, color, handleColorChange }: ColorPaletteProps) => {
  const { fontBackgroundColorPopup } = useEditorStore();

  return (
    <div
      className="absolute top-full z-100 left-0 mt-1 p-3 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[240px]"
      ref={ref}
    >
      <div className="space-y-1">
        {COLOR_PALETTE.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.map((colorItem) => (
              <div
                key={colorItem.color}
                title={colorItem.color}
                style={{ backgroundColor: colorItem.color }}
                className={cn(
                  `w-6 h-6 rounded-full border-1 hover:scale-110 transition-transform cursor-pointer flex-center`,
                  color === colorItem.color && "shadow-md"
                )}
                onClick={() =>
                  handleColorChange({
                    target: { value: colorItem.color },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
              >
                {color === colorItem.color &&
                  (colorItem.variant === "dark" ? (
                    <Check className="size-4 text-white" />
                  ) : (
                    <Check className="size-4 text-gray-500" />
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 👈 색상 초기화 버튼 */}
      <div className="mt-3 border-1 border-border rounded-md">
        <div
          className="w-full text-sm text-gray-600 hover:text-gray-800 py-2 px-2 rounded hover:bg-gray-100 transition-colors cursor-pointer"
          onClick={() =>
            handleColorChange({
              target: {
                value: fontBackgroundColorPopup ? "#ffffff" : "#000000",
              },
            } as React.ChangeEvent<HTMLInputElement>)
          }
        >
          기본 색상으로 초기화
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
