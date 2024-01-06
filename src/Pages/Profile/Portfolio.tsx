import React, { useState } from "react";
import Header from "../../Component/Common/Header";
import Me from "../../assets/images/Portrait.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaReact, FaGit } from "react-icons/fa";

import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiPython,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import Experience from "../../Component/Home/Experience";
import Education from "../../Component/Home/Education";

interface Question {
  question: string;
  answer: string;
  expand: boolean;
}

function Portfolio() {
  const [peopleAskedQuestion, setPeopleAskedQuestion] = useState<Question[]>([
    {
      question:
        "What programming languages and technologies does Jagdeep excel in",
      answer:
        "Jagdeep demonstrates expertise in ReactJS/Redux, Python3, JavaScript (ES6), MongoDB, Node.js, and MySQL.",
      expand: false,
    },
    {
      question:
        "Where did Jagdeep complete his bachelor's degree in Computer Application?",
      answer:
        "Jagdeep completed his bachelor's degree in Computer Application from Dibrugarh University.",
      expand: false,
    },
    {
      question:
        "How long has Jagdeep been involved in the software development field?",
      answer:
        "Jagdeep has accumulated 1.7 years of experience in the software development field.",
      expand: false,
    },
  ]);

  const [showOverview, setShowOverview] = useState<boolean>(true);
  const [showProjects, setShowProjects] = useState<boolean>(false);
  const [showExperience, setShowExperience] = useState<boolean>(false);
  const [showEducation, setShowEducation] = useState<boolean>(false);

  return (
    <div
      className="bg-[#202124] w-full min-h-screen"
      style={{
        fontFamily: `'Rethink Sans', sans-serif`,
      }}
    >
      <Header />
      <div className="pl-44 pr-20 py-6 w-full">
        <div className="w-full mb-7">
          {!showOverview && (
            <div>
              <div className="text-xl text-slate-400">
                Portfolio /{" "}
                <span className="text-white">
                  {showOverview && "Overview"}
                  {showProjects && "Projects"}
                  {showExperience && "Experience"}
                  {showEducation && "Education"}
                </span>
              </div>
              <div className="mt-5 mb-7 flex items-center">
                {showOverview && <div>Overview Content</div>}
                {showProjects && <div>Projects Content</div>}
                {showExperience && <Experience />}
                {showEducation && <Education />}
              </div>
            </div>
          )}
          <div className="flex items-center justify-between w-2/3">
            <div>
              <h1 className="text-2xl text-slate-200">Jagdeep singh</h1>
              <h2 className="text-slate-400 px-1 text-sm flex items-center">
                Web developer{" "}
                <div className="ml-2">
                  <BsThreeDotsVertical />
                </div>
              </h2>
            </div>
            <div className="flex items-center">
              <div
                onClick={() => {
                  setShowOverview(true);
                  setShowProjects(false);
                  setShowExperience(false);
                  setShowEducation(false);
                }}
                className={`mx-2 ${
                  showOverview ? "border" : "border-none"
                } border-slate-300 cursor-pointer bg-[#2d3135] h-10 rounded-full px-6 text-sm text-white/80 flex items-center justify-center`}
              >
                Overview
              </div>
              <div
                onClick={() => {
                  setShowOverview(false);
                  setShowProjects(true);
                  setShowExperience(false);
                  setShowEducation(false);
                }}
                className={`mx-2 ${
                  showProjects ? "border" : "border-none"
                } border-slate-300 cursor-pointer bg-[#2d3135] h-10 rounded-full px-6 text-sm text-white/80 flex items-center justify-center`}
              >
                Projects
              </div>
              <div
                onClick={() => {
                  setShowOverview(false);
                  setShowProjects(false);
                  setShowExperience(true);
                  setShowEducation(false);
                }}
                className={`mx-2 ${
                  showExperience ? "border" : "border-none"
                } border-slate-300 cursor-pointer bg-[#2d3135] h-10 rounded-full px-6 text-sm text-white/80 flex items-center justify-center`}
              >
                Experience
              </div>
              <div
                onClick={() => {
                  setShowOverview(false);
                  setShowProjects(false);
                  setShowExperience(false);
                  setShowEducation(true);
                }}
                className={`mx-2 ${
                  showEducation ? "border" : "border-none"
                } border-slate-300 cursor-pointer bg-[#2d3135] h-10 rounded-full px-6 text-sm text-white/80 flex items-center justify-center`}
              >
                Education
              </div>
            </div>
          </div>
          <div className="w-full my-3 relative flex items-center">
            <div className="relative rounded-xl h-80 w-3/5 flex items-center">
              <div className="w-1/2 h-full rounded-t-xl relative flex items-center">
                <div className="w-full h-full relative p-0.5">
                  <img
                    src="https://jsingh-87973.web.app/static/media/IMG_20211128_082759.399697574ced9f1d97b4.jpg"
                    alt="jagdeep_pic"
                    className="object-cover object-center relative rounded-3xl h-full w-full cursor-pointer transition duration-300 ease-in-out"
                  />
                </div>
              </div>
              <div className="w-1/2 h-full rounded-t-xl relative p-0.5">
                <div className="w-full h-1/2 relative">
                  <img
                    src={Me}
                    alt="jagdeep_pic"
                    className="object-cover object-center relative rounded-3xl h-full w-full cursor-pointer transition duration-300 ease-in-out"
                  />
                </div>
                <div className="w-full h-1/2 relative p-0.5">
                  <img
                    src="https://im.indiatimes.in/content/2023/Aug/Steve-Jobs-Son-Starts-Cancer-Research-Firm_64cb703ec9f19.jpg"
                    alt="jagdeep_pic"
                    className="object-cover object-top relative rounded-3xl h-full w-full cursor-pointer transition duration-300 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2 h-80 flex items-center pl-1.5">
              <Link
                to="https://www.linkedin.com/in/jagdeep-singh-aab76319a/"
                target="_blank"
                className="cursor-pointer w-1/2 h-full rounded-3xl mx-1 "
              >
                <div className="w-full h-full rounded-3xl  bg-[#2d3135]">
                  <div className="w-full h-1/2 relative">
                    <img
                      className="rounded-t-3xl h-full w-full object-top object-cover"
                      src="https://media.licdn.com/dms/image/C5603AQF-3wNHLwRi6g/profile-displayphoto-shrink_800_800/0/1652714730097?e=1709769600&v=beta&t=oxCJlqIvl_OS3p0LvblZi9jbggjhhzyK3z8JPu3_ym0"
                      alt=""
                    />
                  </div>
                  <div className="py-2 px-3 h-1/2 w-full">
                    <div className="w-full flex items-center">
                      <div className="h-8 w-8 relative">
                        <img
                          className="rounded-full h-full w-full object-top object-cover"
                          src="https://media.licdn.com/dms/image/C5603AQF-3wNHLwRi6g/profile-displayphoto-shrink_800_800/0/1652714730097?e=1709769600&v=beta&t=oxCJlqIvl_OS3p0LvblZi9jbggjhhzyK3z8JPu3_ym0"
                          alt=""
                        />
                        <div className="flex text-xs items-center text-white border border-white bg-black p-1 absolute -bottom-1 -right-2 rounded-full">
                          <FaLinkedin color="#0a66c2" fontSize={11} />
                        </div>
                      </div>
                      <div className="mx-3">
                        <div className="text-slate-300 font-thin text-xs">
                          @Jagdeep56
                        </div>
                        <div className="text-slate-500 text-xs font-thin mx-1">
                          LinkedIn Profile
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 mt-2 px-1 text-justify">
                      Having spent 1.7 years involved in the software
                      development field I possess an amount of practical
                      knowledge and a deep interest, in technology. My journey
                      com...
                    </div>
                  </div>
                </div>
              </Link>
              <div className="w-1/2 h-full rounded-3xl mx-1 ">
                <div className="w-full flex flex-col justify-between h-1/2 relative bg-[#2d3135] mb-2 rounded-3xl py-5 px-5 text-white/80">
                  Experience
                  <div className="text-sm text-white">
                    Addensure Media LLP
                    <div>(2022 - Present)</div>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-between h-1/2 relative bg-[#2d3135] mb-2 rounded-3xl py-5 px-5 text-white/80">
                  Education
                  <div>
                    <div className="text-sm text-white mt-2">
                      Dibrugarh University
                      <div className="text-xs text-slate-300">
                        BCA (2018 - 2021)
                      </div>
                    </div>
                    <div className="text-sm text-white mt-2">
                      Debraj roy college
                      <div className="text-xs text-slate-300">
                        High School (2015 - 2018)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-16 flex">
          <div className="w-2/3 pr-5">
            <div className="mb-10 flex w-full flex-col items-start">
              <div>
                <div className="flex items-center">
                  <div className="flex bg-black rounded-full">
                    <img
                      src="https://www.addensure.com/images/media/logo.png"
                      className="w-9 h-9 object-contain object-center"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-white text-sm font-semibold">
                      Addensure · Webdeveloper
                    </div>
                    <div className="text-xs text-slate-200">
                      https://www.addensure.com/
                    </div>
                  </div>
                </div>
                <div className="my-2 mx-0.5">
                  <div className="text-xl text-[#8ab4f8]">
                    Working as a Web developer ( Oct 2022 - Present )
                  </div>
                  <div className="mt-1 text-sm text-white/80">
                    In Addensure Media LLP as a Web Developer, my responsibility
                    is to create functionality with React.js and JavaScript.
                    maintain and troubleshoot existing React.js projects for
                    optimal efficiency. Concurrently, I actively contribute to
                    API development using Node.js, focusing ...
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-10 flex w-full flex-col items-start">
              <div>
                <div className="flex items-center">
                  <div className="flex bg-black rounded-full">
                    <img
                      src="https://www.addensure.com/images/media/logo.png"
                      className="w-9 h-9 object-contain object-center"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-white text-sm font-semibold">
                      Addensure · Webdeveloper Intern
                    </div>
                    <div className="text-xs text-slate-200">
                      https://www.addensure.com/
                    </div>
                  </div>
                </div>
                <div className="my-2 mx-0.5">
                  <div className="text-xl text-[#8ab4f8]">
                    Completed web developer internship (May 2022 - Sept 2022)
                  </div>
                  <div className="mt-1 text-sm text-white/80">
                    In Addensure Media LLP as a Web Developer, my responsibility
                    is to create functionality with React.js and JavaScript.
                    maintain and troubleshoot existing React.js projects for
                    optimal efficiency. Concurrently, I actively contribute to
                    API development using Node.js, focusing ...
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full my-10">
              <div>
                <div className="flex items-center">
                  <div className="flex bg-white p-1.5 rounded-full">
                    <FiGithub color="black" fontSize={24} />
                  </div>
                  <div className="ml-3">
                    <div className="text-white text-sm font-semibold">
                      Github · Jagdeep singh
                    </div>
                    <div className="text-xs text-slate-200">
                      https://github.com/WorkwithJagdeep
                    </div>
                  </div>
                </div>
                <div className="my-2 mx-0.5">
                  <div className="text-xl text-[#8ab4f8]">
                    Jagdeep singh (@WorkwithJagdeep)
                  </div>
                  <div className="mt-1 text-sm text-white/80">
                    With 1 follower and 4 following, Jagdeep navigates the
                    GitHub landscape with an open mind, always ready to connect
                    with like-minded developers and enthusiasts. His projects
                    not only demonstrate technical prowess but also reflect a
                    commitment to making the coding world more enjoyable and
                    visually appealing...
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-10">
              <div>
                <div className="flex items-center">
                  <div className="flex bg-white p-1 rounded-full">
                    <FaLinkedin color="#0a66c2" fontSize={23} />
                  </div>
                  <div className="ml-3">
                    <div className="text-white text-sm font-semibold">
                      LinkedIn · Jagdeep singh
                    </div>
                    <div className="text-xs text-slate-200">
                      www.linkedin.com/in/jagdeep56
                    </div>
                  </div>
                </div>
                <div className="my-2 mx-0.5">
                  <div className="text-xl text-[#8ab4f8]">
                    Jagdeep singh (@jagdeep56)
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    Having spent 1.7 years involved in the software development
                    field I possess an amount of practical knowledge and a deep
                    interest, in technology. My journey commenced with the
                    completion of a bachelor's degree in Computer Application,
                    from Dibrugarh University...
                  </div>
                </div>
              </div>
            </div>
            <div className="my-6">
              <h1 className="text-xl font-bold text-white py-3 border-b border-b-white/20">
                People also ask
              </h1>
              {peopleAskedQuestion.map((question, index) => (
                <div
                  key={index}
                  className={`w-full border-b border-b-white/20 py-4 px-2 select-none cursor-pointer ${
                    question.expand ? "expanded" : ""
                  }`}
                  onClick={() => {
                    setPeopleAskedQuestion((prevQuestions) => {
                      const updatedQuestions = [...prevQuestions];
                      updatedQuestions[index] = {
                        ...updatedQuestions[index],
                        expand: !updatedQuestions[index].expand,
                      };
                      return updatedQuestions;
                    });
                  }}
                >
                  <div className="flex items-center w-full justify-between">
                    <div className="text-base  text-white/70">
                      {question?.question}
                    </div>
                    <div className="w-7">
                      <IoMdArrowDropdown fontSize={20} color="white" />
                    </div>
                  </div>
                  {question.expand && (
                    <div className="py-5 text-base text-slate-300">
                      {question.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="my-6 flex w-full flex-col items-start">
              <div className="bg-[#2d3135] py-2 px-6 rounded-full text-white">
                More from Work Experience
              </div>
              <div className="my-4 border-y w-full border-y-slate-500">
                <div className="w-full flex items-center py-3">
                  <div className="w-1/2 hover:underline cursor-pointer hover:decoration-white mx-1 cursor-pointer px-2 flex items-center">
                    <div className="w-4/5 mr-3 ">
                      <div className="flex items-center">
                        <img
                          src="https://www.skillkart.app/favicon.ico"
                          className="w-5 h-5 rounded-md object-contain object-center"
                          alt=""
                        />
                        <div className="text-sm text-white mx-2">skillkart</div>
                      </div>
                      <div className="mx-1 text-sm text-[#7da2de] my-3">
                        Designed and maintained both frontend and backend
                        systems for Skillkart...
                      </div>
                    </div>
                    <div className=" h-15">
                      <img
                        src="https://www.skillkart.app/favicon.ico"
                        className="w-20 h-full rounded-md object-cover object-center"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-1/2 py-3 hover:underline cursor-pointer hover:decoration-white px-2 border-l cursor-pointer border-l-slate-500  flex items-center">
                    <div className="w-4/5 mr-3 ">
                      <div className="flex items-center ">
                        <img
                          src="https://astrogyanam.com/static/media/logo.969aea013336aeca23b5.png"
                          className="w-5 h-5 rounded-md object-contain object-center bg-white"
                          alt=""
                        />
                        <div className="text-sm text-white mx-2">
                          Astrogyanam
                        </div>
                      </div>
                      <div className="mx-1 text-sm text-[#7da2de] my-3">
                        Developed and implemented a visually captivating user
                        interface...
                      </div>
                    </div>
                    <div className="w-20 h-15">
                      <img
                        src="https://astrogyanam.com/static/media/logo.969aea013336aeca23b5.png"
                        className="w-20 h-full rounded-md object-contain object-center"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center py-3">
                  <div className="w-1/2 mx-1 px-2  border-r border-slate-500 flex items-center hover:underline cursor-pointer hover:decoration-white">
                    <div className="w-4/5 mr-3 ">
                      <div className="flex items-center">
                        <img
                          src="https://fantasyclub.live/static/media/logo.e39606b393b1e05adad9.png"
                          className="w-5 h-5 rounded-md object-contain object-center"
                          alt=""
                        />
                        <div className="text-sm text-white mx-2">
                          FantasyClub
                        </div>
                      </div>
                      <div className="mx-1 text-sm text-[#7da2de] my-3 ">
                        Implemented on-page SEO techniques, optimizing tags,
                        headings, and content...
                      </div>
                    </div>
                    <div className="w-20 h-15">
                      <img
                        src="https://fantasyclub.live/static/media/logo.e39606b393b1e05adad9.png"
                        className="w-20 h-full rounded-md object-cover object-center"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 border-l border-l-slate-400 px-6">
            <div className="w-full text-slate-300">
              <div className="text-white text-base font-semibold">About</div>
              <div className="text-sm my-3 text-justify">
                My name is Jagdeep Singh and I am passionate about software
                development. For the past 1.7 years, I have been fully immersed
                in this ever-evolving field. My journey began when I obtained a
                bachelor's degree in Computer Application from Dibrugarh
                University. This educational chapter sparked my interest and set
                me on a path to delve into the complexities of technology.{" "}
                <span className="text-blue-400 underline">Know more</span>
              </div>
            </div>
            <div className="w-full my-2 text-slate-200">
              <div className="text-sm font-thin">
                <span className="font-bold text-white mr-2">Born:</span>
                <span className="mx-1">30 July 1999 ( age 24 years )</span>
                <span className="mx-1">Golaghat, Assam, India</span>
              </div>
            </div>
            <div className="w-full my-2 text-slate-100">
              <div className="text-sm font-thin">
                <span className="font-bold text-white mr-1">Experience:</span>
                <span className="ml-1">Addensure Media LLP</span>
                <span className="ml-1">(2022 - Present)</span>,
              </div>
            </div>
            <div className="w-full my-2 text-slate-200">
              <div className="text-sm font-thin">
                <span className="font-bold text-white mr-1">Education:</span>
                <span className="ml-1">Dibrugarh University</span>
                <span className="ml-1">(2018-2021)</span>,
                <span className="ml-1">Debraj roy college</span>
                <span className="ml-1">(2018-2021)</span>
              </div>
            </div>
            <div className="py-2.5 ">
              <div className="border-t border-t-white/20 py-2.5">
                <div className="font-bold text-white">Profiles</div>
                <div className="py-4 flex items-start">
                  <Link
                    to="https://github.com/WorkwithJagdeep"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <div className="mr-4 flex items-center flex-col">
                      <div className="p-2.5 border border-white/70 rounded-md bg-white">
                        <FiGithub color="black" fontSize={24} />
                      </div>
                      <div className="text-sm mt-2 text-white">Github</div>
                    </div>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/jagdeep-singh-aab76319a/"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <div className="mr-4 flex items-center flex-col">
                      <div className="p-2.5 border border-white/70 rounded-md bg-white">
                        <FaLinkedin color="#0a66c2" fontSize={24} />
                      </div>
                      <div className="text-sm mt-2 text-white">LinkedIn</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="pb-2.5 ">
              <div>
                <div className="font-bold text-white">Skills</div>
                <div className="py-3 flex items-center flex-wrap justify-center">
                  <Link
                    to="https://react.dev/"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <div className="mr-4 mb-3 flex items-center flex-col">
                      <div className="p-2.5 border border-white/70 rounded-md bg-white">
                        <FaReact color="black" fontSize={24} />
                      </div>
                      <div className="text-sm mt-2 text-white">React.Js</div>
                    </div>
                  </Link>

                  <div className="mr-4 mb-3 flex items-center flex-col">
                    <div className="p-2.5 border border-white/70 rounded-md bg-white">
                      <SiExpress color="#0a66c2" fontSize={24} />
                    </div>
                    <div className="text-sm mt-2 text-white">Express.js</div>
                  </div>
                  <div className="mr-4 mb-3 flex items-center flex-col">
                    <div className="p-2.5 border border-white/70 rounded-md bg-white">
                      <FaNodeJs color="green" fontSize={24} />
                    </div>
                    <div className="text-sm mt-2 text-white">Nodejs</div>
                  </div>
                  <div className="mr-4 mb-3 flex items-center flex-col">
                    <div className="p-2.5 border border-white/70 rounded-md bg-white">
                      <SiMongodb color="green" fontSize={24} />
                    </div>
                    <div className="text-sm mt-2 text-white">MongoDB</div>
                  </div>
                  <div className="mr-4 mb-3 flex items-center flex-col">
                    <div className="p-2.5 border border-white/70 rounded-md bg-white">
                      <FaHtml5 color="red" fontSize={24} />
                    </div>
                    <div className="text-sm mt-2 text-white">HTML5</div>
                  </div>
                  <div className="mr-4 mb-3 flex items-center flex-col">
                    <div className="p-2.5 border border-white/70 rounded-md bg-white">
                      <FaCss3Alt color="royalblue" fontSize={24} />
                    </div>
                    <div className="text-sm mt-2 text-white">CSS3</div>
                  </div>
                  <div className="mr-4 mb-3 flex items-center flex-col">
                    <div className="p-2.5 border border-white/70 rounded-md bg-white">
                      <SiRedux color="violet" fontSize={24} />
                    </div>
                    <div className="text-sm mt-2 text-white">Redux</div>
                  </div>
                  <div className="mr-4 mb-3 flex items-center flex-col">
                    <div className="p-2.5 border border-white/70 rounded-md bg-white">
                      <SiPython color="#3470a2" fontSize={24} />
                    </div>
                    <div className="text-sm mt-2 text-white">Python</div>
                  </div>
                  <div className="mr-4 mb-3 flex items-center flex-col">
                    <div className="p-2.5 border border-white/70 rounded-md bg-white">
                      <SiMysql color="black" fontSize={26} />
                    </div>
                    <div className="text-sm mt-2 text-white">MySql</div>
                  </div>
                  <div className="mr-4 mb-3 flex items-center flex-col">
                    <div className="p-2.5 border border-white/70 rounded-md bg-white">
                      <FaGit color="red" fontSize={24} />
                    </div>
                    <div className="text-sm mt-2 text-white">Git</div>
                  </div>
                  <div className="mr-4 mb-3 flex items-center flex-col">
                    <div className="p-2.5 border border-white/70 rounded-md bg-white">
                      <SiTailwindcss color="blue" fontSize={24} />
                    </div>
                    <div className="text-sm mt-2 text-white">TailwindCSS</div>
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

export default Portfolio;
