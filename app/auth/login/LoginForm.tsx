"use client";
import TextField from "@/components/forms/TextField";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaLockOpen } from "react-icons/fa6";

export default function LoginForm() {
  const [email, setEmail] = useState("anbuceo@gmail.com");
  const [password, setPassword] = useState("123456789");

  return (
    <div className="max-w-xl bg-white shadow m-10 mx-auto p-5 rounded">
      <h4 className="font-semibold text-xl">Login</h4>
      <form className="my-5 space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <TextField
            id="email"
            placeholder="Email Address"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            value={email}
            required
          />
        </div>
        <div>
          <div className="flex justify-between">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <Link
              href="/auth/forgot-password"
              className="text-sm text-indigo-500"
            >
              Forget Password?
            </Link>
          </div>
          <TextField
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
            value={password}
          />
        </div>
        <button
          className="px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white w-full flex items-center justify-center"
          onClick={() =>
            signIn("credentials", {
              email,
              password,
              redirect: true,
              callbackUrl: "/",
            })
          }
          disabled={!email || !password}
        >
          <FaLockOpen className="inline-flex mr-4" />
          <span>Login</span>
        </button>
        <div className="text-center text-sm text-gray-600 font-medium">
          <button
            type="button"
            onClick={() => signIn("github")}
            className="text-center"
          >
            Sign In with Github
          </button>
        </div>
      </form>
    </div>
  );
}
