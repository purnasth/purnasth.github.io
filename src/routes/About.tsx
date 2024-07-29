import React from "react";
import ProfileNav from "../components/ProfileNav";
import purna from "../assets/img/purna/FC_20221024_0004.jpg";

const About: React.FC = () => {
  return (
    <main className="size-full h-full bg-black text-white">
      <div className="w-[calc(100%-14rem-5rem)] h-full ml-auto p-8">
        <ProfileNav />
        <h2 className="text-6xl font-luxury leading-snug">
          Hey, <br /> I'm Purna Shrestha.
        </h2>
        <p className="my-12 ml-32 text-2xl">
          ---------------- a software engineer based in Kathmandu, Nepal. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Ducimus nam
          eligendi amet quam eos totam, blanditiis dolores commodi hic quo?
        </p>

        <img src={purna} alt="Purna" className="w-full h-[42rem] object-cover rounded-3xl"/>
      </div>
    </main>
  );
};

export default About;
