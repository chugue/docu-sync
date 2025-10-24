import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Editor } from "@tiptap/react";
import { ImageIcon, SearchIcon, UploadIcon } from "lucide-react";
import { useState } from "react";

const ImageButton = ({ editor }: { editor: Editor }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onChange = (src: string) => {
    editor.chain().focus().setImage({ src }).run();
  };

  const onUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        onChange(imageUrl);
      }
    };

    input.click();
  };

  const handleImageUrlSubmit = () => {
    if (imageUrl) {
      onChange(imageUrl);
      setImageUrl("");
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="h-4 w-4 flex items-center justify-center rounded-sm text-sm flex-col shrink-0 p-0 leading-none">
            <ImageIcon className="size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent
            className="p-1 bg-white shadow-lg rounded-lg flex flex-col gap-2 -ml-2"
            sideOffset={12}
            side="bottom"
            align="start"
          >
            <DropdownMenuItem
              className="flex flex-row items-center gap-2 hover:bg-neutral-200/80 hover:outline-none px-2 py-1 cursor-pointer"
              onClick={onUpload}
            >
              <UploadIcon className="size-4 mr-2" />
              업로드
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex flex-row items-center gap-2 hover:bg-neutral-200/80 hover:outline-none px-2 py-1 cursor-pointer"
              onClick={() => setIsDialogOpen(true)}
            >
              <SearchIcon className="size-4 mr-2" />
              이미지 주소 넣기
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>이미지 주소 넣기</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="이미지 주소를 넣어주세요"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && imageUrl) {
                e.preventDefault();
                handleImageUrlSubmit();
              }
            }}
          />
          <DialogFooter>
            <Button
              onClick={handleImageUrlSubmit}
              className="w-[60px] bg-primary/80"
            >
              확인
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageButton;
