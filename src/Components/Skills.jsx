import React from "react";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiSass,
  SiTailwindcss,
  SiMaterialui,
  SiBootstrap,
  SiAntdesign,
  SiNpm,
  SiGithub,
  SiGit,
  SiFigma,
  SiTrello,
  SiJira,
  SiGatsby,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript size={42} /> },
  { name: "React.js", icon: <SiReact size={42} /> },
  { name: "TypeScript", icon: <SiTypescript size={42} /> },
  { name: "Next.js", icon: <SiNextdotjs size={42} /> },
  { name: "Redux", icon: <SiRedux size={42} /> },
  { name: "Node.js", icon: <SiNodedotjs size={42} /> },
  { name: "Express.js", icon: <SiExpress size={42} /> },
  { name: "MongoDB", icon: <SiMongodb size={42} /> },
  { name: "Firebase", icon: <SiFirebase size={42} /> },
  { name: "SASS", icon: <SiSass size={42} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={42} /> },
  { name: "Material UI", icon: <SiMaterialui size={42} /> },
  { name: "Bootstrap", icon: <SiBootstrap size={42} /> },
  { name: "Ant Design", icon: <SiAntdesign size={42} /> },
  { name: "NPM", icon: <SiNpm size={42} /> },
  { name: "GitHub", icon: <SiGithub size={42} /> },
  { name: "Git", icon: <SiGit size={42} /> },
  { name: "Figma", icon: <SiFigma size={42} /> },
  { name: "Trello", icon: <SiTrello size={42} /> },
  { name: "Jira", icon: <SiJira size={42} /> },
  { name: "Gatsby", icon: <SiGatsby size={42} /> },
];

export default function Skills() {
  return (
    <div className="max-w-[1300px] mx-auto px-5 py-16 text-white bg-[#0d1117] rounded-2xl">
      <h2 className="text-4xl font-extrabold mb-12 text-center">Skills & Abilities</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-sm mt-1 opacity-80">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
