import React from "react";

function Projects() {
  return (
    <div className="py-14">
      {" "}
      <h1 className="text-2xl font-bold text-white relative before:content-[''] before:w-52 before:h-1 before:bg-red-300 before:absolute before:-bottom-2 before:left-0 before:-translate-y-2">
        Personal Project
      </h1>
      <div className="flex items-start justify-center flex-wrap py-7">
        <div className="w-1/2 px-4 h-72">
          <div className="w-full h-full  p-2">
            <div className="w-full h-1/2  rounded-lg bg-[#212121]">
              <img
                src="https://cdn.dribbble.com/userupload/9310264/file/original-9a8a00727b1aa615e9b1e66d305c9284.png?resize=1200x900"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="h-1/2 w-full mt-2">
              <div className="text-lg font-semibold text-white">GAINTRACK (OPEN-SOURCE)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
