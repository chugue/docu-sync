import RecentDocs from "@/app/(main)/components/RecentDocs";
import ShowCase from "@/app/(main)/components/ShowCase";
import GuideToLogin from "@/shared/components/GuideToLogin";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default async function MainPage() {
  return (
    <main className="flex-1 flex flex-col">
      <ShowCase />
      <SignedOut>
        <GuideToLogin className="flex-1" />
      </SignedOut>
      <SignedIn>
        <RecentDocs />
      </SignedIn>
    </main>
  );
}
