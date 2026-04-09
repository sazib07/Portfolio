import React from "react";
import { FaReact, FaNodeJs, FaDatabase,FaGithub,FaFigma  } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss,SiFirebase,SiTypescript,SiRedux   } from "react-icons/si";
import { RiNextjsFill, RiBootstrapFill} from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import Container from "./container";

export default function Skills() {
  const skills = [
    { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" size={22}/>},
    { name: "React.js", icon: <FaReact className="text-blue-400"size={22} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400"size={22}/> },
    { name: "Express.js", icon: <SiExpress className="bg-black px-1 py-[2px] rounded " size={24} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500"size={22}/> },
    { name: "REST API", icon: <FaDatabase className="text-blue-400" size={22} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-700"size={22}/> },
    {name : "Next js" ,icon:<RiNextjsFill size={22}/>},
    {name: "Bootstrap",icon:<RiBootstrapFill className="text-purple-600"size={22}/>},
    {name:"Firebase",icon:<SiFirebase className="text-yellow-400"size={22} />},
    {name:"Typescript",icon:<SiTypescript className="text-blue-400"size={22} />},
    {name:"Redux",icon:<SiRedux className="text-purple-400"size={22} />},
    {name:"Github",icon:<FaGithub size={22} />},
    {name:"Git",icon:<FaGitAlt className="text-amber-600"size={22} />},
    {name:"Figma",icon:<FaFigma className="text-yellow-600" size={22} />},
  ];

  return (
    <Container>

    <div className="w-full mx-auto p-3 sm:p-4 md:p-5">
      <h2 className="text-lg sm:text-xl md:text-2xl text-center mb-4 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
        My Skills & Abilities
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center p-2 rounded-xl 
            bg-white/5 backdrop-blur-md border border-white/10
            hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-blue-500/20
            hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20
            transition-all duration-300"
          >
            <div className="mb-1 group-hover:scale-110 transition duration-300">
              {skill.icon}
            </div>

            <p className="font-medium text-gray-300 text-[9px] sm:text-[10px] md:text-xs text-center leading-tight group-hover:text-white transition duration-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>

    </Container>
  );
}