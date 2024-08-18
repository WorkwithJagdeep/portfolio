import React from "react";

function Education() {
  return (
    <div className="w-full py-12">
      <h1 className="text-2xl font-bold text-white relative before:content-[''] before:w-32 before:h-1 before:bg-red-300 before:absolute before:-bottom-2 before:left-0 before:-translate-y-2">
        Academic Journey
      </h1>
      <div className=" py-8 px-5 w-full">
        <div className="w-full flex items-center h-28">
          <div className="w-1/3 border-r border-r-white/50 relative h-full flex flex-col justify-center">
            <div className="text-lg text-white">October 2021</div>
            <h2 className="text-lg text-white/80">August 2018</h2>
          </div>
          <div className="w-2/3 flex flex-col justify-center relative h-full">
            <div className="w-3 h-3 rounded-full bg-red-300 absolute -left-[6px]"></div>
            <div className="px-7">
              <div className="mb-2 text-lg text-white  font-semibold">
                Bachelor of Computer Applications - 74.56%
              </div>

              <div className="flex items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsK3O1KNnGvEPyaQPI8D6rKyaqzeI3-cJgHw&s"
                  className="w-8 h-8 rounded-full object-cover"
                  alt=""
                />
                <span className="mx-2 text-base text-white/80">
                  Dibrugarh University
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
