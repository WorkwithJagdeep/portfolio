import React from "react";
import { Link } from "react-router-dom";

function Career() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-white relative before:content-[''] before:w-32 before:h-1 before:bg-red-300 before:absolute before:-bottom-2 before:left-0 before:-translate-y-2">
        Career Journey
      </h1>
      <div className=" py-8 px-5 w-full">
        <div className="w-full flex items-center h-28">
          <div className="w-1/3 border-r border-r-white/50 relative h-full flex flex-col justify-center">
            <div className="text-lg text-white">Present</div>
            <h2 className="text-lg text-white/80">May 2024</h2>
          </div>
          <div className="w-2/3 flex flex-col justify-center relative h-full">
            <div className="w-3 h-3 rounded-full bg-red-300 absolute -left-[6px]"></div>
            <div className="px-7">
              <div className="mb-2 text-lg text-white  font-semibold">
                Senior full stack developer
              </div>
              <div className="flex items-center">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4D0BAQHnV1z9n-OWpA/company-logo_200_200/company-logo_200_200/0/1643286869826?e=1732147200&v=beta&t=gD_i2v__DbMiBxUgToJN8DJxbNvWIaha_PvScr5GgjQ"
                  className="w-8 h-8 rounded-full object-contain"
                  alt=""
                />
                <span className="mx-2 text-base text-white/80">
                  Addensure Media LLP
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center h-28">
          <div className="w-1/3 border-r border-r-white/50 relative h-full  flex flex-col justify-center">
            <div className="text-lg text-white">April 2024</div>
            <h2 className="text-lg text-white/80">october 2022</h2>
          </div>
          <div className="w-2/3 flex flex-col justify-center relative h-full">
            <div className="w-3 h-3 rounded-full bg-red-300 absolute -left-[6px]"></div>
            <div className="px-7">
              <div className="mb-2 text-lg text-white  font-semibold">
                Full stack developer
              </div>
              <div className="flex items-center">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4D0BAQHnV1z9n-OWpA/company-logo_200_200/company-logo_200_200/0/1643286869826?e=1732147200&v=beta&t=gD_i2v__DbMiBxUgToJN8DJxbNvWIaha_PvScr5GgjQ"
                  className="w-8 h-8 rounded-full object-contain"
                  alt=""
                />
                <span className="mx-2 text-base text-white/80">
                  Addensure Media LLP
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center h-28">
          <div className="w-1/3 border-r border-r-white/50 relative h-full  flex flex-col justify-center">
            <div className="text-lg text-white">september 2022</div>
            <h2 className="text-lg text-white/80">May 2022</h2>
          </div>
          <div className="w-2/3 flex flex-col justify-center relative h-full">
            <div className="w-3 h-3 rounded-full bg-red-300 absolute -left-[6px]"></div>
            <div className="px-7">
              <div className="mb-2 text-lg text-white  font-semibold">
                Web developer Intern
              </div>
              <div className="flex items-center">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4D0BAQHnV1z9n-OWpA/company-logo_200_200/company-logo_200_200/0/1643286869826?e=1732147200&v=beta&t=gD_i2v__DbMiBxUgToJN8DJxbNvWIaha_PvScr5GgjQ"
                  className="w-8 h-8 rounded-full object-contain"
                  alt=""
                />
                <span className="mx-2 text-base text-white/80">
                  Addensure Media LLP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/works">
          <div className="py-3 px-7 bg-red-300 rounded-lg cursor-pointer">Explore My Work</div>
        </Link>
      </div>
    </div>
  );
}

export default Career;
