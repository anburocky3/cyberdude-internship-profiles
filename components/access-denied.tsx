import { signIn } from "next-auth/react";

export default function AccessDenied() {
  return (
    <div className="bg-red-400 text-white p-5">
      <h1 className="font-semibold text-xl">Access Denied</h1>
      <p>
        <a
          href="/api/auth/signin"
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          You must be signed in to view this page
        </a>
      </p>
    </div>
  );
}
