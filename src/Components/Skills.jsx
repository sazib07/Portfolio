import React from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill, RiBootstrapFill } from "react-icons/ri";

export default function Skills() {
  const skills = [
    { name: "JavaScript (ES6+)", icon: <SiJavascript size={30} /> },
    { name: "React.js", icon: <FaReact size={30} /> },
    { name: "Node.js", icon: <FaNodeJs size={30} /> },
    { name: "Express.js", icon: <SiExpress size={30} /> },
    { name: "MongoDB", icon: <SiMongodb size={30} /> },
    { name: "REST API", icon: <FaDatabase size={30} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={30} /> },
    {name : "Next js" ,icon:<RiNextjsFill size={30}/>},
    {name: "Bootstrap",icon:<RiBootstrapFill size={30}/>},
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
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
  );
}
