import { cn } from "../lib/utils";
import LoginButton from "./LoginButton";

const GuideToLogin = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-center flex-1", className)}>
      <div className="flex flex-col gap-4">
        <span className="text-xl ">로그인 후 이용해주세요.</span>
        <LoginButton name="로그인 하기" variant="outline" />
      </div>
    </div>
  );
};

export default GuideToLogin;
