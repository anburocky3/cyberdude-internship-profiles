import { useSession, signOut, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function DashboardPage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
  //   const session = useSession({
  //     required: true,
  //     onUnauthenticated() {
  //       redirect("/auth/login");
  //     },
  //   });
  //   return (
  //     <div className="p-8">
  //       <div className="text-white">{session?.data?.user?.email}</div>
  //       <button className="text-white" onClick={() => signOut}>
  //         Logout
  //       </button>
  //     </div>
  //   );
}

// DashboardPage.requireAuth = true;
