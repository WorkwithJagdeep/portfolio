import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGit } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiPython,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaDocker, FaJava } from "react-icons/fa";

function Skills() {
  return (
    <div className="py-9">
      {" "}
      <h1 className="text-2xl font-bold text-white relative before:content-[''] before:w-32 before:h-1 before:bg-red-300 before:absolute before:-bottom-2 before:left-0 before:-translate-y-2">
        My Skills
      </h1>
      <div>
        <div className="mt-8 text-white">
          {/* Frontend Skills */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">
              Programming language
            </h3>
            <div className="flex flex-wrap">
              <div className="mr-7 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <SiPython color="#3470a2" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">Python</div>
              </div>
              <div className="mr-7 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <FaJava color="red" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">Java</div>
              </div>

              <div className="mr-7 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md ">
                  <AiOutlineJavaScript color="yellow" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">JavaScript</div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap">
              <div className="mr-7 mb-3 flex items-center flex-col">
                {" "}
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <FaReact color="black" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">React.js</div>
              </div>
              <div className="mr-7 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <FaHtml5 color="red" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">HTML5</div>
              </div>

              <div className="mr-7 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <FaCss3Alt color="royalblue" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">CSS3</div>
              </div>

              <div className="mr-7 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <SiTailwindcss color="blue" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">TailwindCSS</div>
              </div>
              <div className="mr-7 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <RiNextjsFill color="black" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">Next.Js</div>
              </div>
              <div className="mr-7 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <SiRedux color="violet" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">Redux</div>
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap">
              <div className="mr-4 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <SiSpring color="green" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">Spring boot</div>
              </div>
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
                <div className="text-sm mt-2 text-white">Node.js</div>
              </div>
            </div>
          </div>

          {/* Database Skills */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Database</h3>
            <div className="flex flex-wrap">
              <div className="mr-4 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <SiMongodb color="green" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">MongoDB</div>
              </div>

              <div className="mr-4 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <SiMysql color="black" fontSize={26} />
                </div>
                <div className="text-sm mt-2 text-white">MySQL</div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap">
              <div className="mr-7 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <FaGit color="red" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">Git</div>
              </div>
              <div className="mr-7 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <FaDocker color="blue" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">Docker</div>
              </div>
              <div className="mr-7 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <FaGit color="red" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">Git</div>
              </div>
              <div className="mr-7 mb-3 flex items-center flex-col">
                <div className="p-2.5 border border-white/70 rounded-md bg-white">
                  <FaGit color="red" fontSize={24} />
                </div>
                <div className="text-sm mt-2 text-white">Git</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
