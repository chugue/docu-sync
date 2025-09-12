"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const DocumentHeader = () => {
  const router = useRouter();
  const [title, setTitle] = useState("제목 없는 문서");
  const [isStarred, setIsStarred] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <section className="flex w-full px-2 py-2">
      <div
        className="flex m-1 cursor-pointer hover:bg-muted rounded-sm py-1"
        onClick={() => router.push("/")}
      >
        <Image
          src="/icons/doc-icon.png"
          alt="doc-icon"
          width={100}
          height={100}
          className="w-9 h-9 rounded-xs"
        />
      </div>
      <div className="flex flex-col py-1">
        <div className="flex flex-row items-center gap-2">
          <input
            ref={inputRef}
            className="text-lg font-normal border-1 border-transparent focus:border px-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            size={Math.max(1, title.length + 2)}
            style={{ width: "auto" }}
          />
          {isStarred ? (
            <Star className="size-4" onClick={() => setIsStarred(!isStarred)} />
          ) : (
            <Star
              className="size-4 fill-primary stroke-primary"
              onClick={() => setIsStarred(!isStarred)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default DocumentHeader;
