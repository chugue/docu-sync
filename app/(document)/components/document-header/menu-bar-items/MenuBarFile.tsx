import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/shared/components/ui/navigation-menu";
import {
  ChevronRight,
  Download,
  FileText,
  Folder,
  Info,
  Mail,
  Pencil,
  Printer,
  Trash2,
  Users,
} from "lucide-react";
import Link from "next/link";
import DocumentHeaderSeperator from "../DocumentHeaderSeperator";

const MenuBarFile = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>파일</NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid w-[250px] gap-1">
          <li>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <FileText />새 문서
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
                  <Folder />
                  열기
                </div>
                <span className="text-muted-foreground text-sm">⌘O</span>
              </Link>
            </NavigationMenuLink>
            <DocumentHeaderSeperator />
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <Users />
                  협업
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
                  <Mail />
                  이메일
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
                  <Download />
                  다운로드
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
                  <Pencil />
                  이름 바꾸기
                </div>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <Trash2 />
                  휴지통으로 이동
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
                  <Info />
                  세부정보
                </div>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="flex-row items-center gap-2 justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <Printer />
                  인쇄
                </div>
                <span className="text-muted-foreground text-sm">⌘P</span>
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default MenuBarFile;
