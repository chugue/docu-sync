import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";

export interface UseOpenMotionProps {
  isOpen: boolean;

  ref: RefObject<HTMLDivElement>;
}

const useOpenMotion = ({ ref, isOpen }: UseOpenMotionProps) => {
  useGSAP(() => {
    if (!isOpen || !ref.current) return;
    gsap.from(ref.current, {
      opacity: 0,
      duration: 0.1,
      y: -30,
      scale: 0.95,
      ease: "power4.out",
    });
  }, [isOpen]);
};

export default useOpenMotion;
