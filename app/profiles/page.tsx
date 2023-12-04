import Image from "next/image";
import TheNavbar from "../components/TheNavbar";
import memberData from "../data/index.json";
import { Button } from "../types";

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
              <div className="mt-4 flex sm:flex-col md:flex-row md:items-center justify-between md:space-x-3 sm:space-y-3">
                {/* Task Button */}
                <Buttons
                  href={member.tasks}
                  text="Task"
                  className="px-5 sm:mt-3 py-1.5 sm:w-full rounded bg-blue-500 text-white text-sm"
                />

                {/* LinkedIn Button */}
                <Buttons
                  href={member.linkedIn}
                  text="LinkedIn"
                  className="px-5 py-1.5 sm:w-full rounded bg-gray-100 text-gray-900 text-sm hover:transition hover:bg-blue-500 hover:text-white"
                />

                {/* LinkedIn Button */}
                <Buttons
                  href={member.tasks}
                  text="Facebook"
                  className="px-5 py-1.5 sm:w-full rounded bg-gray-100 text-gray-900 text-sm hover:transition hover:bg-blue-500 hover:text-white"
                />
              </div>
              {/* View GitHub Button */}
              <div className="bg-white mt-4 py-1 rounded hover:transition hover:bg-blue-500 hover:text-white">
                <Buttons href={member.github} text="Explore GitHub" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Page;
