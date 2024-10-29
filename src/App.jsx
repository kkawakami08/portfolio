import Header from "./assets/components/Header";
import Skills from "./assets/components/Skills";
import Projects from "./assets/components/Projects";

const App = () => {
  return (
    <div className="w-screen bg-gradient-to-br from-dark-green to-dark-green/70 h-fit flex flex-col items-center text-center gap-6 font-poppins p-10">
      <Header />

      <Projects />
    </div>
  );
};

export default App;
