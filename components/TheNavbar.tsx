import Link from "next/link";
import { FaGithub, FaRandom, FaUsers } from "react-icons/fa";
import { FaLock, FaStar, FaToolbox } from "react-icons/fa6";

const TheNavbar = () => {
  return (
    <nav className=" bg-[#2B2A4C] p-6">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/" className="font-semibold text-xl tracking-tight">
            CyberDude Interns
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
            </svg>
          </button>
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto ">
          <div className="lg:flex-grow space-x-6">
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              <FaRandom className="mr-2 inline-flex" />
              CyPick
            </Link>
            <Link
              href={"/profiles"}
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              <FaUsers className="mr-2 inline-flex" />
              Intern Profiles
            </Link>
            <Link
              href="/auth/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-white"
            >
              <FaLock className="mr-2 inline-flex" />
              Login
            </Link>
            <span className="h-40 w-1 bg-slate-100" />
            <a
              href="https://github.com/anburocky3/cyberdude-internship-profiles"
              target="_blank"
              className="px-3 py-2 bg-transparent border rounded text-white hover:bg-indigo-500 hover:border-transparent"
            >
              <FaGithub className="mr-2 inline-flex" />
              Github
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TheNavbar;
