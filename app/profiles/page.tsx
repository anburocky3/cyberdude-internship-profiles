import Image from "next/image";
import TheNavbar from "../components/TheNavbar";
import memberData from "../data/index.json";
import { Button } from "../types";
import Link from "next/link";
import {
  FaGithub,
  FaClipboardList,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const Buttons = ({ href, text, target = "_blank", className }: Button) => (
  <a href={href} target={target} className={className}>
    {text}
  </a>
);

function Page() {
  return (
    <main className="p-5 sm:p-10">
      <p className="bg-indigo-200 text-center md:text-xl px-2 py-2 font-semibold mb-10 rounded">
        🙋‍♂️ Hello viewers, we'd like to inform you that there are currently #
        {memberData.length} individuals participating in the CyberDude
        Internships, (
        {memberData.filter((member) => member.gender === "M").length} males and{" "}
        0{memberData.filter((member) => member.gender === "F").length} females.)
        If you happened to miss these opportunities you're welcome to{" "}
        <a
          href="https://www.youtube.com/playlist?list=PL73Obo20O_7grw9hv_lEO6iUPS6gc9ehh"
          target="_blank"
          className="text-orange-800 hover:text-orange-900"
        >
          watch the entire series here. 👈
        </a>
      </p>

      <div className=":space-x-5 sm:flex flex-wrap justify-between">
        {memberData.map((member) => (
          <div
            className="bg-[#2B2A4C] h-[440px] sm:h-[550px] sm:w-[280px] md:w-[350px] md:h-[460px] text-center px-5 py-8 shadow rounded-lg mb-10"
            key={member.id}
          >
            {/* Profil Card */}
            <div>
              {/* Profile Image */}
              <div className="flex justify-center mt-2 mb-5">
                <Image
                  src={`${member.github}.png`}
                  alt={member.name}
                  width={500}
                  height={500}
                  className=" w-48 shadow-lg rounded-full"
                />
              </div>

              {/* Intern Name & Position */}
              <div className=" space-y-1.5">
                <h4 className="font-semibold text-2xl text-white">
                  {member.name}
                </h4>
                <p className="text-gray-400 text-[14px]">
                  Intern Full-Stack Engineer
                </p>
              </div>

              {/* Buttons Division */}
              <div className="mt-4 flex sm:flex-col sm:space-y-3 md:flex-row md:items-center gap-2 justify-center md:space-x-3">
                
                {/* Task Button */}
                <Link
                  href={member.tasks}
                  target="_blank"
                  className="flex justify-center bg-[#9594A5] hover:bg-[#6A6981] items-center px-2 text-white py-1.5 sm:w-full md:mt-3 rounded text-sm hover:transition"
                >
                  <FaClipboardList className="mr-1" />
                  Tasks
                </Link>

                {/* LinkedIn Button */}
                <Link
                  href={member.linkedIn}
                  target="_blank"
                  className="flex justify-center bg-[#9594A5] hover:bg-[#6A6981] items-center px-2 text-white py-1.5 sm:w-full rounded text-sm hover:transition"
                >
                  <FaLinkedin className="mr-1" />
                  LinkedIn
                </Link>

                {/* Instagram Button */}
                <Link
                  href={member.instagram}
                  target="_blank"
                  className="flex justify-center bg-[#9594A5] hover:bg-[#6A6981] items-center px-2 text-white py-1.5 sm:w-full rounded text-sm hover:transition"
                >
                  <FaInstagramSquare className="mr-1" />
                  Instagram
                </Link>
              </div>

              {/* View GitHub Button */}
              <div className="mt-4 py-1 bg-[#9594A5] hover:bg-[#6A6981] text-white rounded hover:transition">
                <Link
                  href={member.github}
                  target="_blank"
                  className="flex items-center justify-center"
                >
                  <FaGithub className="mr-1.5" />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Page;
