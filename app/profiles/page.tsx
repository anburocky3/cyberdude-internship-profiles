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
      <p className="bg-indigo-200 px-2 py-2 font-semibold mb-5 rounded">
        ⚠️ Hello viewer, #{memberData.length} members performing in CyberDude
        Internships (
        {memberData.filter((member) => member.gender === "M").length} males and{" "}
        {memberData.filter((member) => member.gender === "F").length} females.)
        If you missed these opportunities, you can{" "}
        <a
          href="https://www.youtube.com/playlist?list=PL73Obo20O_7grw9hv_lEO6iUPS6gc9ehh"
          target="_blank"
          className="text-orange-800 hover:text-orange-900"
        >
          watch the entire series here
        </a>
      </p>
      {memberData.map((member) => (
        <div
          className="bg-white p-5 shadow  rounded flex space-x-4 items-center mb-3"
          key={member.id}
        >
          <Image
            src={`${member.github}.png`}
            alt={member.name}
            width={500}
            height={500}
            className="w-20 rounded-full"
          />
          <div>
            <h4 className="font-semibold">{member.name}</h4>
            <div className="my-2 space-x-2">
              <Buttons
                href={member.github}
                text="Github"
                className="px-3 rounded py-1 bg-blue-500 text-white text-sm"
              />
              <Buttons
                href={member.tasks}
                text="Task"
                className="px-3 rounded py-1 bg-orange-400 text-white text-sm"
              />
              {/* <Buttons
                  href={member.name}
                  text="Projects"
                  className="px-3 rounded py-1 bg-blue-500 text-white text-sm"
                /> */}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Page;
