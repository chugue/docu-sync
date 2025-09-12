import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { ExternalLinkIcon, PencilIcon, TrashIcon } from "lucide-react";

export const DocDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="cursor-pointer hover:bg-muted rounded-sm p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 px-1" align="end" alignOffset={-125}>
        <DropdownMenuItem className="flex items-center gap-4">
          <PencilIcon className="size-4" />
          <span>이름 바꾸기</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-4">
          <TrashIcon className="size-4" />
          <span>삭제</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-4">
          <ExternalLinkIcon className="size-4" />
          <span>새 탭에서 열기</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
