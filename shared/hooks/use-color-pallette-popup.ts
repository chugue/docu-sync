import { useEffect } from "react";

interface UseColorPallettePopupProps {
  ref: React.RefObject<HTMLDivElement>;
  setColorPalettePopup: (colorPalettePopup: boolean) => void;
  colorPalettePopup: boolean;
}

const useColorPallettePopup = ({
  ref,
  setColorPalettePopup,
  colorPalettePopup,
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
