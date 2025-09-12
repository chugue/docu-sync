import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import LoginButton from "./LoginButton";
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
      <div className="flex flex-row z-60">
        <SignedOut>
          <LoginButton name="로그인" variant="default" />
        </SignedOut>
        <SignedIn>
          <UserButton showName={true} />
          {/* <AvatarDropdown /> */}
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
