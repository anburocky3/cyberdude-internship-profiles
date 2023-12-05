"use client";

import AccessDenied from "@/components/access-denied";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();

  console.log(session, status);

  if (status === "authenticated") {
    // If session exists, display content
    return (
      <div>
        <h1>Protected Page</h1>
        <p>
          <strong>Welcome {session.user?.email}</strong>
        </p>
      </div>
    );
  }

  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied />;
  }
}
