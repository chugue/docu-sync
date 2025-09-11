import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const getSessionServer = async () => {
  const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    redirect("/sign-in");
  }

  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }
  return user;
};

export default getSessionServer;
