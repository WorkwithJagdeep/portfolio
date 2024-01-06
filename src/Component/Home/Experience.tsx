import React, { useState } from "react";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

function Experience() {
  const [experience, setExperience] = useState([
    {
      companyName: "Addensure Media LLP",
      role: "Web Developer",
      duration: "Oct 2022 - Present",
    },
    {
      companyName: "Addensure Media LLP",
      role: "Web Developer Intern",
      duration: "May 2022 - Sept 2022",
    },
  ]);
  return (
    <>
      {experience.map((experience) => (
        <div className="w-44 h-56 border border-slate-600 rounded mr-3 cursor-pointer hover:border-white">
          <div className="h-2/3 w-full flex items-center justify-center rounded bg-[#2d3135]">
            <HiOutlineBuildingOffice fontSize={40} color="white" />
          </div>
          <div className="h-1/3 px-2 py-1">
            <div className="text-sm mb-1 text-white">
              {experience.companyName}
            </div>
            <div className="text-xs mb-1 text-white/90">{experience.role}</div>
            <div className="text-xs mb-1 text-white/70">
              {experience.duration}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Experience;
