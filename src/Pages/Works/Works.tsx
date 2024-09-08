import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../../Component/Common/Header";

function Works() {
  const [pointX, setPointX] = useState<number>(0);
  const [pointY, setPointY] = useState<number>(0);

  useEffect(() => {
    window.scroll({
      top: 0,
    });
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
          <div className="text-white font-bold text-2xl">Work</div>
          <div>
            <div className="relative flex items-center justify-start">
              <div>
                <div className=" text-white font-bold text-3xl">
                  Addensure Media LLP
                </div>
                <div className="text-base font-thin text-white/90">
                  Full Stack Developer {"  "}
                  <span>(october 2022 - Present)</span>
                </div>
                <div className="relative border-l border-l-white/10 pb-9 mx-4">
                  <div className="w-3 h-3 rounded-full bg-red-300 top-2 -left-1.5 absolute"></div>
                  <div className="mx-6  mt-9">
                    <h3 className="underline mt-3 mb-1 text-white/80">
                      Optimized Performance, Implemented Video Calling at
                      Skillkart
                    </h3>
                    <div className="mx-6">
                      <ul className="list-disc text-white/70 ">
                        <li className="text-justify">
                          Sparked a 40% website speed boost and 25% user
                          engagement surge by collaborating on the end-to-end
                          Skillkart web app using Agile SDLC.
                        </li>
                        <li className="text-justify">
                          Optimized codebase for performance and stability,
                          resulting in a 25% reduction in server response time
                          and a 50% stability gain through memory leak
                          mitigation.
                        </li>
                        <li className="text-justify">
                          Refined software framework through applying
                          sophisticated Object-Oriented Programming (OOP)
                          methodologies, achieving a 40% decrease in bug reports
                          and a 30% enhancement in system performance and
                          scalability.
                        </li>
                        <li className="text-justify">
                          Engineered a cutting-edge video calling functionality
                          using NodeJS and Socket.io, boosting user satisfaction
                          by 30% and monthly active users by 20%
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative border-l  border-l-white/10 pb-9 mx-4">
                  <div className="w-3 h-3 rounded-full bg-red-300 top-2 -left-1.5 absolute"></div>
                  <div className="mx-6 ">
                    <h3 className="underline  mb-1 text-white/80">
                      Accelerated Mobile App Testing with Python and ADB
                    </h3>
                    <div className="mx-6">
                      <ul className="list-disc text-white/70 ">
                        <li className="text-justify">
                          Increased mobile app testing execution speed by 50%
                          via automated testing with Python and adb on emulators
                        </li>
                        <li className="text-justify">
                          Developed reusable Python testing components
                          thatreduced test creation time by 30%, increased test
                          coverage by 25%, and accelerated development cycles by
                          15% through enhanced team collaboration.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative border-l  border-l-white/10 mx-4">
                  <div className="w-3 h-3 rounded-full bg-red-300 top-2 -left-1.5 absolute"></div>
                  <div className="mx-6 ">
                    <h3 className="underline  mb-1 text-white/80">
                      UI/Backend Optimization for Astrogyanam
                    </h3>
                    <div className="mb-5 mx-6">
                      <ul className="list-disc text-white/70 ">
                        <li className="text-justify">
                          Re-architected a captivating userinterface for
                          Astrogyanam using ReactJS, leading to a 25% reduction
                          in bounce rate and enhanced user engagement.
                        </li>
                        <li className="text-justify">
                          Collaborated with the backend team to Produce
                          PHP-based backend solutions to enhance data processing
                          efficiency, resulting in a 50% reduction in data query
                          response time.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <div className=" text-white font-bold text-3xl">
                    Addensure Media LLP
                  </div>
                  <div className="text-base font-thin text-white/90">
                    Web developer Intern {"  "}
                    <span>(May 2022 - september 2022)</span>
                  </div>
                  <div className="relative border-l border-l-white/10 pb-9 mx-4">
                    <div className="w-3 h-3 rounded-full bg-red-300 top-2 -left-1.5 absolute"></div>
                    <div className="mx-6  mt-9">
                      <h3 className="underline mt-3 mb-1 text-white/80">
                        UI and Backend Optimization for Enhanced User Experience
                      </h3>
                      <div className="mx-6">
                        <ul className="list-disc text-white/70 ">
                          <li className="text-justify">
                            Collaborated on backend development using PHP and
                            MySQL, enhancing website performance with a 28%
                            reduction in response time and a 50% improvement in
                            stability.
                          </li>
                          <li className="text-justify">
                            Deployed advanced on-page SEO techniques, achieving
                            a significant 35% boost in search engine visibility
                            and a 25% increase in organic traffic in under 3
                            months, enhancing brand presence and online reach.
                          </li>
                          <li className="text-justify">
                            Refined software framework through applying
                            sophisticated Object-Oriented Programming (OOP)
                            methodologies, achieving a 40% decrease in bug
                            reports and a 30% enhancement in system performance
                            and scalability.
                          </li>
                          <li className="text-justify">
                            Engineered a cutting-edge video calling
                            functionality using NodeJS and Socket.io, boosting
                            user satisfaction by 30% and monthly active users by
                            20%
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
