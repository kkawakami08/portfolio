import React from "react";
import Header from "../assets/components/Header";
import ProjectList from "../assets/components/ProjectList";
import Nav from "../assets/components/Nav";
import Footer from "../assets/components/Footer";
const Home = () => {
  return (
    <div className="w-screen bg-gradient-to-br from-dark-green to-dark-green/70 h-fit lg:h-screen flex flex-col items-center text-center gap-14 font-poppins lg:justify-between">
      <Nav />
      <Header />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default Home;
