import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/shared/components/ui/navigation-menu";
import {
  ChevronRight,
  Image,
  MessageCircleMore,
  SeparatorHorizontal,
  Smile,
  Table,
} from "lucide-react";
import Link from "next/link";
import DocumentHeaderSeperator from "../DocumentHeaderSeperator";

const MenuBarInsert = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>삽입</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[250px] gap-1">
          <li>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <Image />
                  이미지
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
                  <Table />표
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
                  <Smile />
                  기호
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
                  <SeparatorHorizontal />
                  가로줄
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
                  <MessageCircleMore />
                  댓글
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

export default MenuBarInsert;
