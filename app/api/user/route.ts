import { Result } from "@/shared/types/result";
import { SessionUser } from "@/shared/types/session-user";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request
): Promise<NextResponse<Result<SessionUser>>> => {
  const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const user = await currentUser();

  if (!user) {
    return NextResponse.json(
      { success: false, message: "User not found" },
      { status: 404 }
    );
  }

  console.log("👉👉👉👉user", user);
  const sessionUser: SessionUser = {
    id: user.id,
    name: user.firstName ?? "",
    email: user.emailAddresses[0].emailAddress,
    image: user.imageUrl,
  };

  return NextResponse.json({ success: true, data: sessionUser });
};
