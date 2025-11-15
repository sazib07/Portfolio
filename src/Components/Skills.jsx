import React from 'react'
import { SiAntdesign, SiBootstrap, SiExpress, SiFirebase, SiGit, SiGithub, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiSass, SiTailwindcss, SiTypescript } from 'react-icons/si'

const Skills = () => {
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
  { name: "GitHub", icon: <SiGithub size={42} /> },
  { name: "Git", icon: <SiGit size={42} /> },
  { name: "Figma", icon: <SiFigma size={42} /> },
 

  return (
    <div>Skills</div>
  )
}

export default Skills