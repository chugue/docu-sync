import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/shared/components/ui/navigation-menu";
import {
  Clipboard,
  ClipboardType,
  Copy,
  Redo2,
  ReplaceAll,
  Scissors,
  TextSelect,
  Trash,
  Undo2,
} from "lucide-react";
import Link from "next/link";
import DocumentHeaderSeperator from "../DocumentHeaderSeperator";

const MenuBarModify = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>수정</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[250px] gap-1">
          <li>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <Undo2 />
                  실행 취소
                </div>
                <span className="text-muted-foreground text-sm">⌘Z</span>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <Redo2 />
                  재실행
                </div>
                <span className="text-muted-foreground text-sm">⌘Y</span>
              </Link>
            </NavigationMenuLink>
            <DocumentHeaderSeperator />
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <Scissors />
                  잘라내기
                </div>
                <span className="text-muted-foreground text-sm">⌘X</span>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <Copy />
                  복사
                </div>
                <span className="text-muted-foreground text-sm">⌘C</span>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <Clipboard />
                  붙여넣기
                </div>
                <span className="text-muted-foreground text-sm">⌘V</span>
              </Link>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <ClipboardType />
                  서식없이 붙여넣기
                </div>
                <span className="text-muted-foreground text-sm">⌘+Shift+V</span>
              </Link>
            </NavigationMenuLink>
            <DocumentHeaderSeperator />
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <TextSelect />
                  모두 선택
                </div>
                <span className="text-muted-foreground text-sm">⌘A</span>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <Trash />
                  삭제
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
                  <ReplaceAll />
                  찾기 바꾸기
                </div>
                <span className="text-muted-foreground text-sm">⌘+Shift+H</span>
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default MenuBarModify;
