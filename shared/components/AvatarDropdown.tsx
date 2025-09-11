"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";
import Image from "next/image";
import useSession from "../hooks/use-session";
import { Button } from "./ui/button";

export function AvatarDropdown() {
  const { session } = useSession();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="rounded-full w-8 h-8 overflow-clip z-50"
          aria-label="Open user menu"
        >
          <Avatar>
            <AvatarImage src={session?.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 shadow-lg shrink-0">
        <div className="flex-center flex-col gap-4  ">
          <p className="text-black text-sm">{session?.email}</p>
          <div className="flex-center">
            <Image
              src={session?.image ?? ""}
              alt={session?.name ?? ""}
              width={100}
              height={100}
              className="rounded-full my-2"
            />
          </div>
          <Button
            className="flex-center flex-row gap-4 cursor-pointer w-full "
            variant="default"
          >
            <LogOut />
            <span>로그아웃 하기</span>
          </Button>
          <div className="flex-center flex-row gap-2 text-xs text-muted-foreground">
            <span>개인 정보처리 방침</span>
            <span>•</span>
            <span>서비스 이용약관</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
