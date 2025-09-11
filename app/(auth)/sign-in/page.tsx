import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex-center h-screen">
      <SignIn />
    </div>
  );
};

export default SignInPage;
