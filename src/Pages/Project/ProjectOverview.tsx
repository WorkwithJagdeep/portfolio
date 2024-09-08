import React, { useEffect, useState } from "react";
import Header from "../../Component/Common/Header";
import { motion } from "framer-motion";
import { projects } from "../../Container/Data/Projects";
import { useParams } from "react-router";
import { FaArrowRight } from "react-icons/fa";

function ProjectOverview() {
  const { projectId } = useParams();
  const [pointX, setPointX] = useState<number>(0);
  const [pointY, setPointY] = useState<number>(0);
  const [currentProject, setCurrentProject] = useState<any>({});

  useEffect(() => {
    window.scroll({
      top: 0,
    });
    console.log(projectId);
    const getCurrentProject = projects.find(
      (state: any) => state.id == projectId
    );
    if (getCurrentProject) {
      console.log(getCurrentProject);
      setCurrentProject(getCurrentProject);
    }
  }, []);

  return (
    <div
      className="bg-[#161616] min-h-screen flex flex-col items-center py-2 w-full "
      onMouseMove={(e) => {
        setPointX(e.clientX);
        setPointY(e.clientY);
      }}
    >
      <motion.div
        className={`w-4 h-4 fixed bg-yellow-200/70 rounded-full z-0`}
        animate={{
          top: pointY,
          left: pointX,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="w-[700px] relative z-50">
        <Header />

        <div className="w-full drop-shadow-md py-5 px-3 rounded-xl mt-5">
          <div className="text-white/70 mb-2">
            <span className="text-red-300 mr-2">Project</span>
            {">"}
            <span className="mx-2">{currentProject?.name}</span>
          </div>
          <div className="w-full h-[200px] my-3 rounded-lg">
            <img
              src={currentProject?.image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-white font-bold text-2xl mt-3">
            {currentProject?.name}
          </div>
          <div className="text-white/80 mt-2">{currentProject?.overview}</div>
          <div className="my-6 w-full">
            <div className="text-white font-bold text-2xl mt-3">Tech Stack</div>
            <div className="mt-2 flex items-center">
              {" "}
              <span className="text-red-300 mr-2">
                <FaArrowRight />
              </span>
              {currentProject?.tech_stack?.map(
                (stack: string, index: number) => (
                  <span className="text-white/70 mr-3" key={index}>
                    {stack}
                    {currentProject?.tech_stack.length - 1 > index && ","}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="my-6 w-full">
            <div className="text-white font-bold text-2xl mt-3">
              ScreenShots
            </div>
            <div className="flex items-start w-full">
              {currentProject?.app_image?.map(
                (image: string, index: number) => (
                  <div key={index} className="w-1/4 mr-3 mb-3">
                    <img
                      src={image}
                      alt="app_overview"
                      className="w-full h-[400px] object-contain"
                    />
                  </div>
                )
              )}
            </div>
          </div>
          <div className="my-6 w-full">
            <div className="text-white font-bold text-2xl mt-3">Features</div>
            <div>
              <ul>
                <li className="text-white/80 mb-4">
                  <span className="mr-2 text-white font-semibold">
                    Anonymous Messaging:
                  </span>{" "}
                  Users can send anonymous messages to specific individuals or
                  to public groups.
                </li>
                <li className="text-white/80 mb-4">
                  <span className="mr-2 text-white font-semibold">
                    Shared Experiences:
                  </span>{" "}
                  Users can share their screens or content in real-time for
                  others to join. (backend functionality not yet implemented)
                </li>
                <li className="text-white/80 mb-4">
                  <span className="mr-2 text-white font-semibold">
                    Share Moment:
                  </span>{" "}
                  Users can upload and share pre-recorded videos.(backend
                  functionality to be implemented in the future).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectOverview;
