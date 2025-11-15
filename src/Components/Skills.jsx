import React from "react";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Redux"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST API"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Mongoose"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "GitHub", "VS Code", "Firebase", "Postman"],
  },
];

export default function Skills() {
  return (
    <div className="max-w-[1300px] mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="rounded-2xl shadow-md p-4">
              <CardContent>
                <h3 className="text-xl font-semibold mb-3">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gray-100 text-sm shadow"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
