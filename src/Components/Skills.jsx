import React from "react";
import { FaReact, FaNodeJs, FaDatabase,FaGithub,FaFigma  } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss,SiFirebase,SiTypescript,SiRedux   } from "react-icons/si";
import { RiNextjsFill, RiBootstrapFill} from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import Container from "./container";

export default function Skills() {
  const skills = [
    { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" size={30}/>},
    { name: "React.js", icon: <FaReact className="text-blue-400"size={30} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400"size={30}/> },
    { name: "Express.js", icon: <SiExpress size={30} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500"size={30}/> },
    { name: "REST API", icon: <FaDatabase size={30} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-700"size={30}/> },
    {name : "Next js" ,icon:<RiNextjsFill size={30}/>},
    {name: "Bootstrap",icon:<RiBootstrapFill className="text-purple-600"size={30}/>},
    {name:"Firebase",icon:<SiFirebase className="text-yellow-400"size={30} />},
     {name:"Typescript",icon:<SiTypescript className="text-blue-400"size={30} />},
      {name:"Redux",icon:<SiRedux className="text-purple-400"size={30} />},
       {name:"Github",icon:<FaGithub size={30} />},
        {name:"Git",icon:<FaGitAlt className="text-amber-600"size={30} />},
         {name:"Figma",icon:<FaFigma className="text-yellow-600" size={30} />},
  ];

  return (
    <Container>

    <div className="w-full  mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-2xl shadow-sm hover:shadow-md transition duration-200 "
          >
            <div className="mb-2 ">{skill.icon}</div>
            <p className="font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    </Container>
 
  );
}
