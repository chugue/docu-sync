import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
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
      <Avatar className="rounded-full w-8 h-8 overflow-clip">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
