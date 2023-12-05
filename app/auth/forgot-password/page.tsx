"use client";
import TextField from "@/components/forms/TextField";
import Link from "next/link";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

export default function LoginPage() {
  return (
    <div className="max-w-xl bg-white shadow m-10 mx-auto p-5 rounded">
      <h4 className="font-semibold text-xl">Forgot Password</h4>
      <form className="my-5 space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <TextField id="email" placeholder="Email Address" required />
        </div>

        <button className="px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white w-full flex items-center justify-center">
          <FaArrowRightArrowLeft className="inline-flex mr-4" />
          <span>Proceed</span>
        </button>
        <div className="text-gray-500 text-sm text-center">
          Remembered,{" "}
          <Link href="/auth/login" className="text-indigo-500">
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
}
