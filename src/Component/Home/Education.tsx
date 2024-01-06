import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";

function Education() {
  const [education, setEducation] = useState([
    {
      institution: "Dibrugarh University",
      course: "BCA",
      duration: "2018-2021",
    },
    {
      institution: "Debraj Roy College",
      course: "high school",
      duration: "2015-2018",
    },
    {
      institution: "Jyoti Academy",
      course: "Schooling",
      duration: "2003-2015",
    },
  ]);
  return (
    <>
      {education.map((education) => (
        <div className="w-44 h-56 border border-slate-600 rounded mr-3 cursor-pointer hover:border-white">
          <div className="h-2/3 w-full flex items-center justify-center rounded bg-[#2d3135]">
            <FaGraduationCap fontSize={40} color="white" />
          </div>
          <div className="h-1/3 px-2 py-1">
            <div className="text-sm mb-1 text-white">
              {education.institution}
            </div>
            <div className="text-xs mb-1 text-white/90">{education.course}</div>
            <div className="text-xs mb-1 text-white/70">
              {education.duration}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Education;
