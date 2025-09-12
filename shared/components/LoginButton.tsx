"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const LoginButton = ({
  name,
  variant,
}: {
  name: string;
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | "secondary";
}) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/sign-in")}
      variant={variant ?? "default"}
    >
      {name}
    </Button>
  );
};

export default LoginButton;
