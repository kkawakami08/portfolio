import React from "react";
import Header from "../assets/components/Header";
import ProjectList from "../assets/components/ProjectList";
const Home = () => {
  return (
    <div className="w-screen bg-gradient-to-br from-dark-green to-dark-green/70 h-fit flex flex-col items-center text-center gap-14 font-poppins p-10">
      <Header />
      <ProjectList />
    </div>
  );
};

export default Home;
