import Image from "next/image";
import Link from "next/link";
import { AvatarDropdown } from "./AvatarDropdown";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="flex top-0 h-12 z-30 w-full justify-between items-center px-6 relative shadow-xs">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={300}
          height={100}
          className="h-6 w-auto"
        />
      </Link>
      <div className="w-full absolute flex-center">
        <Input className="w-[30%] " placeholder="검색" />
      </div>
      <AvatarDropdown />
    </header>
  );
};

export default Header;
