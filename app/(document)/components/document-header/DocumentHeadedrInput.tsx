import { Star } from "lucide-react";
import { useRef, useState } from "react";

const DocumentHeadedrInput = () => {
  const [title, setTitle] = useState("제목 없는 문서");
  const [isStarred, setIsStarred] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-row items-center gap-2 h-6">
      <input
        ref={inputRef}
        className="text-lg font-semibold border-1 border-transparent focus:border px-2"
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
  );
};

export default DocumentHeadedrInput;
