import Image from "next/image";
import { DocDropdown } from "./DocDropdown";

const recentDocs = [
  {
    id: 1,
    name: "제목 없는 문서",
    image: "",
    recentEditYear: "2025",
    recentEditMonth: "09",
    recentEditDay: "11",
    isEditedToday: true,
    recentEditTime: "14:00",
    editUsers: ["홍길동", "김철수"],
  },
  {
    id: 2,
    name: "제목 없는 문서",
    image: "",
    recentEditYear: "2025",
    recentEditMonth: "09",
    recentEditDay: "11",
    isEditedToday: true,
    recentEditTime: "14:00",
    editUsers: ["홍길동", "김철수"],
  },
  {
    id: 3,
    name: "제목 없는 문서",
    image: "",
    recentEditYear: "2025",
    recentEditMonth: "09",
    recentEditDay: "11",
    isEditedToday: true,
    recentEditTime: "14:00",
    editUsers: ["홍길동", "김철수"],
  },
  {
    id: 4,
    name: "제목 없는 문서",
    image: "",
    recentEditYear: "2025",
    recentEditMonth: "09",
    recentEditDay: "11",
    isEditedToday: true,
    recentEditTime: "14:00",
    editUsers: ["홍길동", "김철수"],
  },
];

const RecentDocs = () => {
  return (
    <section className="flex-center w-full h-[20rem] ">
      <div className="w-[60vw] h-full flex-col">
        <div className="w-full h-[4rem] flex items-center">
          <h1>최근 문서</h1>
        </div>
        <div className="flex-1 grid grid-cols-5 gap-4">
          {recentDocs &&
            recentDocs.map((item) => (
              <div
                key={item.id}
                className="w-full h-[340px] border border-border flex flex-col rounded-md"
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                ) : (
                  <div className="w-full h-full border-b border-border">
                    <h1>문서 1</h1>
                  </div>
                )}
                <div className="w-full flex flex-col p-2 px-4">
                  <div className="w-full mt-2 text-sm">
                    {item.name || "제목 없는 문서"}
                  </div>
                  <div className="w-full flex justify-between items-center gap-2 text-muted-foreground py-1">
                    <div className="flex flex-1 items-center gap-2 flex-row">
                      <Image
                        src="/icons/doc-icon-small.webp"
                        alt="doc-icon"
                        width={100}
                        height={100}
                        className="w-4 h-4 rounded-xs"
                      />
                      <span className="text-xs">
                        {item.recentEditYear}.&nbsp;{item.recentEditMonth}
                        .&nbsp;
                        {item.recentEditDay}
                      </span>
                    </div>
                    <DocDropdown />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RecentDocs;
