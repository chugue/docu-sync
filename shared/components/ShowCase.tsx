import Image from "next/image";
const showCaseTypes = [
  {
    type: "empty",
    name: "빈 문서",
    image: "/doc-images/blank-doc-1.png",
    colorDesc: "",
  },
  {
    type: "report",
    name: "보고서",
    image: "/doc-images/show-1-report.png",
    colorDesc: "럭셔리",
  },
  {
    type: "resume",
    name: "이력서",
    image: "/doc-images/show-2-resume.png",
    colorDesc: "산호",
  },
  {
    type: "resume",
    name: "이력서",
    image: "/doc-images/show-3-resume.png",
    colorDesc: "세리프",
  },
  {
    type: "mail",
    name: "서신",
    image: "/doc-images/show-4-mail.png",
    colorDesc: "민트",
  },
  {
    type: "project",
    name: "프로젝트 제안서",
    image: "/doc-images/show-5-project.png",
    colorDesc: "회귀선",
  },
  {
    type: "brochure",
    name: "브로슈어",
    image: "/doc-images/show-6-prochure.png",
    colorDesc: "기하",
  },
];

const ShowCase = () => {
  return (
    <section className="flex-center w-full h-[20rem] bg-showcase">
      <div className="w-[60vw] h-full flex-col">
        <div className="w-full h-[4rem] flex items-center">
          <h1>새 문서 시작</h1>
        </div>
        <div className="flex-1 grid grid-cols-7 gap-4">
          {showCaseTypes &&
            showCaseTypes.map((item) => (
              <div>
                <Image
                  src={item.image}
                  alt="showcase"
                  width={100}
                  height={100}
                  className="w-full border border-border hover:border-primary duration-300"
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
