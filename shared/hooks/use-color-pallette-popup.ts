import { useEffect } from "react";

interface UseColorPallettePopupProps {
  ref: React.RefObject<HTMLDivElement>;
  colorPalettePopup: boolean;
  setColorPalettePopup: (colorPalettePopup: boolean) => void;
}

const useColorPallettePopup = ({
  ref,
  colorPalettePopup,
  setColorPalettePopup,
}: UseColorPallettePopupProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setColorPalettePopup(false);
      }
    };

    if (colorPalettePopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [colorPalettePopup, setColorPalettePopup]);
};

export default useColorPallettePopup;
