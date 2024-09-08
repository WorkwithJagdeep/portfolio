import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { projects } from "../../Container/Data/Projects";

type Project = {
  id: string;
  name: string;
  image: string;
  overview: string;
  githubLink: string;
};

function Projects() {
  return (
    <div className="pt-14">
      <h1 className="text-2xl  font-bold text-white relative before:content-[''] before:w-52 before:h-1 before:bg-red-300 before:absolute before:-bottom-2 before:left-0 before:-translate-y-2">
        Personal Project
      </h1>
      <div className="flex items-start justify-start max-md:mt-6 flex-wrap py-7 max-md:py-2">
        {projects.map((project: Project, index: number) => (
          <div
            className="w-1/2 px-4 h-96 max-md:w-full max-md:px-0"
            key={index}
          >
            <div className="w-full h-full  p-2">
              <div className="w-full h-1/2  rounded-lg bg-[#212121]">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-1/2 w-full mt-3 flex items-start flex-col">
                <div className="text-lg font-semibold text-white">
                  {project.name}
                </div>
                <div className="text-white/80 text-sm mt-1">
                  {project.overview.slice(0, 130)}
                </div>
                <div className="w-full flex items-center justify-between">
                  <Link
                    to={project.githubLink}
                    className="w-1/2 mr-3"
                  >
                    {" "}
                    <div className="mt-3 py-2 px-7 w-full bg-white flex items-center justify-center rounded-md text-sm font-semibold">
                      <FaGithub />
                      <span className="mx-2"> Github</span>
                      <FiExternalLink />
                    </div>
                  </Link>
                  <Link
                    to={`/projectoverview/${project.id}`}
                    className="w-1/2 ml-3"
                  >
                    {" "}
                    <div className="mt-3 py-2 px-7 w-full bg-white flex items-center justify-center rounded-md text-sm font-semibold">
                      <span className="mx-2">Explore</span>
                      <FiExternalLink />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
