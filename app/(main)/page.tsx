import RecentDocs from "@/app/(main)/components/RecentDocs";
import ShowCase from "@/app/(main)/components/ShowCase";
import { auth } from "@clerk/nextjs/server";

export default async function MainPage() {
  await auth.protect();
  return (
    <main>
      <ShowCase />
      <RecentDocs />
    </main>
  );
}
