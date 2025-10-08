import Image from "next/image";
import { useRouter } from "next/navigation";

const DocumentHeaderLogo = () => {
  const router = useRouter();
  return (
    <div
      className="flex ml-2 cursor-pointer hover:bg-muted rounded-sm py-1"
      onClick={() => router.push("/")}
    >
      <Image
        src="/icons/doc-icon.png"
        alt="doc-icon"
        width={100}
        height={100}
        className="w-10 h-10 rounded-xs"
      />
    </div>
  );
};

export default DocumentHeaderLogo;
