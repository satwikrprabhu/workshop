import Image from "next/image";
import React from "react";
import { data } from "../../utils/profiles";

const Card = () => {
  return (
    <div className="flex flex-wrap  justify-center items-center gap-5">
      {data.map((profile,index) => {
        return (
          <div className="flex flex-col justify-center items-center px-6 py-5 bg-slate-950  border border-gray-700 rounded-xl" key={index}>
            <Image
              src={`https://github.com/${profile.githubUserName}.png`}
              alt="Profile Picture"
              height={200}
              width={200}
              className="rounded-lg"
            />
            <h1 className="text-2xl font-bold text-white mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {profile.name}
            </h1>
            <div className="  rounded-lg ">
            <p className="text-white font-semibold italic text-center my-4 bg-transparent">
            &quot; {profile.hotTake} &quot;
            </p></div>
            <a
              className="bg-slate-900 text-white rounded-md p-2 hover:bg-slate-800 font-semibold"
              target="_blank"
              href={`https://github.com/${profile.githubUserName}`}
            >
              View Profile
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
