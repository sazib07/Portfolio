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
    <div className="w-full mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 grid gap-4 sm:gap-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 sm:mb-4">
        My Working Experience
      </h2>

      <div className="grid gap-3 sm:gap-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-200"
          >
            <h3 className="text-base sm:text-lg md:text-xl text-gray-500 font-semibold">
              {exp.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">{exp.place}</p>
            <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
              {exp.duration}
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}