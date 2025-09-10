import { UserCircleIcon } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="flex top-0 h-12 z-50 w-full justify-between items-center px-6 relative shadow-md">
      <Image
        src="/logo.png"
        alt="logo"
        width={300}
        height={100}
        className="h-6 w-auto"
      />
      <div className="w-full absolute flex-center">
        <Input className="w-[30%] " placeholder="Search" />
      </div>
      <UserCircleIcon />
    </header>
  );
};

export default Header;
