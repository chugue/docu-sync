import Image from "next/image";
const showCaseTypes = [
  {
    id: 1,
    type: "empty",
    name: "빈 문서",
    image: "/doc-images/blank-doc-1.png",
    colorDesc: "",
  },
  {
    id: 2,
    type: "report",
    name: "보고서",
    image: "/doc-images/show-1-report.png",
    colorDesc: "럭셔리",
  },
  {
    id: 3,
    type: "resume",
    name: "이력서",
    image: "/doc-images/show-2-resume.png",
    colorDesc: "산호",
  },
  {
    id: 4,
    type: "resume",
    name: "이력서",
    image: "/doc-images/show-3-resume.png",
    colorDesc: "세리프",
  },
  {
    id: 5,
    type: "mail",
    name: "서신",
    image: "/doc-images/show-4-mail.png",
    colorDesc: "민트",
  },
  {
    id: 6,
    type: "project",
    name: "프로젝트 제안서",
    image: "/doc-images/show-5-project.png",
    colorDesc: "회귀선",
  },
  {
    id: 7,
    type: "brochure",
    name: "브로슈어",
    image: "/doc-images/show-6-prochure.png",
    colorDesc: "기하",
  },
];

const ShowCase = () => {
  return (
    <section className="flex-center w-full h-[20rem] bg-showcase">
      <div className="w-[60vw] min-w-[483px] h-full flex-col">
        <div className="w-full h-[4rem] flex items-center">
          <h1>새 문서 시작</h1>
        </div>
        <div className="flex-1 h-[250px] grid grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(150px,150px))] gap-4 overflow-hidden">
          {showCaseTypes &&
            showCaseTypes.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.image}
                  alt="showcase"
                  width={100}
                  height={100}
                  className="w-full border border-border hover:border-primary duration-300 rounded-md"
                />
                <div className="w-full mt-2 text-sm">{item.name}</div>
                <div className="w-full text-muted-foreground/50 text-sm ">
                  {item.colorDesc}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
