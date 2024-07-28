import React from "react";
import ProfileNav from "../components/ProfileNav";

const About: React.FC = () => {
  return (
    <main className="size-full h-screen bg-black">
      <ProfileNav />
      <h1>This is an About Page.</h1>
    </main>
  );
};

export default About;
