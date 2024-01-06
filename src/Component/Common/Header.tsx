import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { GoProject } from "react-icons/go";
import { FaGraduationCap } from "react-icons/fa6";

function Header() {
  return (
    <div className="sticky top-0 bg-[#202124] z-50">
      <div className="py-6 px-10 flex items-center w-full justify-between ">
        <div className="flex items-center w-2/3">
          <div>
            <img
              src="https://www.google.com/logos/doodles/2024/new-years-day-2024-6753651837110174-s.png"
              className="w-20"
              alt="google_logo"
            />
          </div>
          <div className="w-2/3 h-11 rounded-full justify-between bg-[#303134] ml-12 flex items-center py-2.5 px-6 text-slate-100 text-sm">
            <div>Jagdeep Singh's Portfolio</div>
            <div className="h-full flex items-center">
              <div className="h-full bg-slate-400 w-px mr-5"></div>
              <div>
                <IoSearchSharp color="#83aaea" fontSize={21} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-6">
            <IoSettingsOutline color="#e8eaed" fontSize={22} />
          </div>
          <div>
            <TbGridDots color="#e8eaed" fontSize={22} />
          </div>
        </div>
      </div>
      <div className="px-48  pb-3">
        <div className="w-9/12 flex items-center text-white/60">
          <div className=" flex items-center mr-8 text-white relative justify-center">
            <div className="flex items-center z-10 cursor-pointer">
              <IoSearchSharp fontSize={19} />
              <div className="text-sm ml-1">All</div>
            </div>
            <div className="absolute bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-300 w-16 h-8 rounded-full -z-0 flex items-center justify-center">
              <div
                className="rounded-full bg-[#202124] relative"
                style={{
                  width: 63,
                  height: 31,
                }}
              ></div>
            </div>
          </div>
          <div className=" flex items-center mr-6 cursor-pointer">
            <HiOutlineBuildingOffice />
            <div className="text-sm ml-2">Experience</div>
          </div>
          <div className=" flex items-center mr-6 cursor-pointer">
            <FaGraduationCap />
            <div className="text-sm ml-2">Experience</div>
          </div>
          <div className=" flex items-center mr-6 cursor-pointer">
            <GoProject fontSize={19} />
            <div className="text-sm ml-2">Showcase</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
