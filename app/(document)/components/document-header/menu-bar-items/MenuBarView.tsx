import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/shared/components/ui/navigation-menu";
import {
  ChevronRight,
  Maximize,
  MessageCircleMore,
  PenLine,
  Scissors,
} from "lucide-react";
import Link from "next/link";
import DocumentHeaderSeperator from "../DocumentHeaderSeperator";

const MenuBarView = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>보기</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[250px] gap-1">
          <li>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <PenLine />
                  모드
                </div>
                <ChevronRight />
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <MessageCircleMore />
                  댓글
                </div>
                <ChevronRight />
              </Link>
            </NavigationMenuLink>
            <DocumentHeaderSeperator />
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <Scissors className="opacity-0" />
                  인쇄 레이아웃 표시
                </div>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <Scissors className="opacity-0" />
                  눈금자 표시
                </div>
              </Link>
            </NavigationMenuLink>
            <DocumentHeaderSeperator />
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <Maximize />
                  전체 화면
                </div>
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default MenuBarView;
