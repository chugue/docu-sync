import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/shared/components/ui/navigation-menu";
import {
  ChevronRight,
  Columns2,
  List,
  ListChevronsUpDown,
  Ratio,
  TextQuote,
  Type,
} from "lucide-react";
import Link from "next/link";
import DocumentHeaderSeperator from "../DocumentHeaderSeperator";

const MenuBarFormat = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>서식</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[250px] gap-1">
          <li>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <Type />
                  텍스트
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
                  <TextQuote />
                  정렬 및 들여쓰기
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
                  <ListChevronsUpDown />줄 및 단락간격
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
                  <Columns2 />열
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
                  <List />
                  글머리 기호
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
                  <Ratio />
                  페이지 방향
                </div>
                <ChevronRight />
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default MenuBarFormat;
