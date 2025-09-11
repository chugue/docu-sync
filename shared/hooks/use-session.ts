import { useEffect, useState } from "react";

interface Session {
  name: string;
  email: string;
  image: string;
}

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  image: "https://github.com/shadcn.png",
};

const useSession = () => {
  const [session, setSession] = useState<Session | null>();

  useEffect(() => {
    const session = user;
    if (session) {
      setSession(session);
    }
  }, []);

  return {
    session,
  };
};

export default useSession;
