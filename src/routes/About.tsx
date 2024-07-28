import React from "react";
import ProfileNav from "../components/ProfileNav";

const About: React.FC = () => {
  return (
    <main className="size-full h-screen bg-black text-white">
      <div className="w-[calc(100%-14rem-5rem)] h-full ml-auto flex items-center justify-center">
        <ProfileNav />
        <h1 className="text-5xl">This is an About Page.</h1>
      </div>
    </main>
  );
};

export default About;
