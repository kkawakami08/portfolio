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
  const iconsClassName = "w-12 h-12 fill-tangerine";
  return (
    <div className="flex justify-center flex-wrap gap-3 pt-5 pb-8 lg:row-start-2 lg:col-span-2 lg:pb-0 ">
      <Html className={iconsClassName} />
      <Css className={iconsClassName} />
      <Javascript className={iconsClassName} />
      <Typescript className={iconsClassName} />
      <Jotai className={iconsClassName} />
      <React className={iconsClassName} />
      <Tailwind className={iconsClassName} />
      <Next className={iconsClassName} />
      <Vite className={iconsClassName} />
      <Mongo className={iconsClassName} />
      <Git className={iconsClassName} />
      <AfterEffects className={iconsClassName} />
      <Illustrator className={iconsClassName} />
    </div>
  );
};

export default Skills;
