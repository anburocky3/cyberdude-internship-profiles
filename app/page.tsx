"use client";
import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { FaUserGear } from "react-icons/fa6";
import memberData from "@/data/index.json";
import { Member, Quote } from "@/types/index";

function Page() {
  const [quote, setQuote] = useState<Quote>();
  const [isExploding, setIsExploding] = useState(false);
  const [currentMember, setCurrentMember] = useState<Member>();

  const shuffle = (array: Member[]) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    setCurrentMember(array[chooseRandomNumber(0, array.length)]);
    return array;
  };

  const chooseRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * max) + min;
  };

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuote(data[chooseRandomNumber(0, data.length)]);
      });
  }, []);

  return (
    <main className="p-5 sm:p-10">
      <div className="flex justify-between flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-10 sm:space-y-0">
        <div className="bg-white p-5 rounded w-full h-fit shadow-xl">
          <div className="text-center space-y-10 p-10 relative">
            <div className="hidden sm:flex absolute -top-5 -right-5 space-x-10 select-none bg-teal-50 p-5 rounded-bl font-medium">
              <div className="flex">
                <input
                  type="checkbox"
                  id="Male"
                  value="Male"
                  onClick={() => alert("We are working this feature.")}
                />
                <label htmlFor="Male" className="ml-2">
                  Male
                </label>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  id="Female"
                  value="Female"
                  onClick={() => alert("We are working this feature.")}
                />
                <label htmlFor="Female" className="ml-2">
                  Female
                </label>
              </div>
            </div>
            <span>Woohoo! You are in!</span>
            <h1 className="text-4xl sm:text-6xl font-bold flex justify-center">
              {currentMember?.name ? currentMember?.name : "Let's Go 🚀"}
              {isExploding && (
                <div style={{ position: "absolute", top: "50%", left: "50%" }}>
                  <ConfettiExplosion />
                </div>
              )}
            </h1>
            <button
              className="mt-3 bg-[#AF2655] hover:bg-[#872341] text-white font-bold py-2 px-4 rounded inline-flex items-center "
              onClick={() => {
                shuffle(memberData);
                setIsExploding(!isExploding);
              }}
            >
              <FaUserGear className="mr-2" />
              <span>Generate</span>
            </button>
          </div>
          {quote && (
            <blockquote className="mt-5 p-4 italic border-l-4 bg-blue-100 text-blue-600 border-blue-500 rounded ">
              <span className="text-base sm:text-lg leading-loose">
                {quote.text}
              </span>
              <br />
              <span className="text-blue-600 font-bold mt-2 text-sm block">
                - {quote.author.replace(", type.fit", "")}
              </span>
            </blockquote>
          )}
        </div>

        <aside className="bg-white w-96 p-5 rounded shadow-xl">
          <h4 className="font-semibold text-xl">
            Intern Members ({memberData.length})
          </h4>
          <ul className="my-2">
            {memberData.map((member, index) => (
              <li
                className="hover:border p-2 rounded hover:bg-gray-100 cursor-pointer"
                key={`interns-${index}`}
              >
                <a href="#" className="flex justify-between">
                  <span>{member.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 128 128"
                  >
                    {member.gender === "M" ? (
                      <g fill="#7071E8">
                        <title>Male</title>
                        <path d="M119.175 9.018v41.26h-16.42V9.018z" />
                        <path d="M119.278 25.432h-41.26V9.012h41.26z" />
                        <path d="M110.389 29.414L78.873 60.93l-11.61-11.61l31.515-31.516z" />
                        <path d="M77.49 50.7c-15.96-15.96-41.84-15.96-57.8 0c-15.96 15.96-15.96 41.84 0 57.8s41.84 15.96 57.8 0c15.96-15.96 15.96-41.84 0-57.8zM31.61 96.58c-9.38-9.38-9.38-24.58 0-33.96c9.38-9.38 24.58-9.38 33.96 0s9.38 24.58 0 33.96c-9.37 9.38-24.58 9.38-33.96 0z" />
                      </g>
                    ) : (
                      <g fill="#C683D7">
                        <title>Female</title>
                        <path d="M71.926 83.696v40.31h-16.86v-40.31z" />
                        <path d="M83.65 111.532H43.34v-16.86h40.31zM63.5 4.68c-22.57 0-40.87 18.3-40.87 40.87c0 22.57 18.3 40.87 40.87 40.87s40.87-18.3 40.87-40.87c0-22.57-18.3-40.87-40.87-40.87zm0 64.89c-13.26 0-24.02-10.75-24.02-24.02c0-13.26 10.75-24.02 24.02-24.02s24.02 10.75 24.02 24.02c0 13.26-10.76 24.02-24.02 24.02z" />
                      </g>
                    )}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}

export default Page;
