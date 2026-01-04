import React from "react";

// Experience Component based on your courses: Sociology + MERN Stack Development
export default function Experience() {
  const experiences = [
   
     {
      title: "MERN Stack learner",
      place: "Creative IT Institute",
      duration: "2025 - Present",
      description:
        "Learning full-stack web development using MongoDB, Express.js, React, and Node.js. Building real-world UI components, APIs, and dynamic web apps.",
    },
  ];

  return (
    <div className="w-full mx-auto p-6 grid gap-6 ">
      <h2 className="text-3xl font-bold text-center mb-4">My Working Experience</h2>

      <div className="grid gap-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-200 "
          >
            <h3 className="text-xl text-gray-500 font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-600">{exp.place}</p>
            <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
            <p className="text-gray-700 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
