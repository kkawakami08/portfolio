import AfterEffects from "@/assets/icons/after-effects.svg";
import Css from "@/assets/icons/css.svg";
import Git from "@/assets/icons/git.svg";
import Html from "@/assets/icons/html.svg";
import Illustrator from "@/assets/icons/illustrator.svg";
import Javascript from "@/assets/icons/javascript.svg";
import Mongo from "@/assets/icons/mongo.svg";
import Next from "@/assets/icons/next.svg";
import React from "@/assets/icons/react.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import Typescript from "@/assets/icons/typescript.svg";
import Vite from "@/assets/icons/vite.svg";
import Jotai from "@/assets/icons/jotai.svg";

const Skills = () => {
  return (
    <div className="flex justify-center flex-wrap gap-3 pt-5 pb-10 ">
      <Html className="w-16 h-16 fill-light-green" />
      <Css className="w-16 h-16 fill-light-green" />
      <Javascript className="w-16 h-16 fill-light-green" />
      <Typescript className="w-16 h-16 fill-light-green" />
      <Jotai className="w-16 h-16 fill-light-green" />
      <React className="w-16 h-16 fill-light-green" />
      <Tailwind className="w-16 h-16 fill-light-green" />
      <Next className="w-16 h-16 fill-light-green" />
      <Vite className="w-16 h-16 fill-light-green" />
      <Mongo className="w-16 h-16 fill-light-green" />
      <Git className="w-16 h-16 fill-light-green" />
      <AfterEffects className="w-16 h-16  fill-light-green" />
      <Illustrator className="w-16 h-16 fill-light-green" />
    </div>
  );
};

export default Skills;
