// import { useAuth } from "@clerk/nextjs";
// import { useEffect, useState } from "react";
// import { SessionUser } from "../types/session-user";

// interface Session {
//   name: string;
//   email: string;
//   image: string;
// }

// const user = {
//   id: "1",
//   name: "John Doe",
//   email: "john.doe@example.com",
//   image: "https://github.com/shadcn.png",
// };

// const useSession = () => {
//   const [session, setSession] = useState<SessionUser | null>();
//   const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth();

//   useEffect(async () => {
//     const fetchExternalData = async () => {
//       const token = await getToken();
//       const response = await fetch("/api/user", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await response.json();

//       return data.data as SessionUser;
//     };
//     console.log("👉👉👉👉fetchExternalData");
//     const session = (await fetchExternalData()) as SessionUser;
//     setSession(session);
//     console.log("👉👉👉👉session", session);
//   }, []);
// };

// export default useSession;
