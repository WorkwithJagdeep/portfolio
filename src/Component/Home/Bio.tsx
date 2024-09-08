import { motion } from "framer-motion";
import ProfilePic from "../../assets/image/profile-pic.png";
import { Link } from "react-router-dom";

function Bio() {
  return (
    <motion.div className="w-full drop-shadow-md py-5 px-3 rounded-xl  mt-5 max-sm:mt-8">
      <div className="flex items-center justify-between w-full max-sm:flex-col-reverse">
        <div className="flex flex-col items-start max-sm:w-full">
          <h1 className="text-white text-4xl">Jagdeep Singh</h1>
          <h2 className="text-white/80 text-lg ml-1">Software Engineer</h2>
          <Link
            to="https://drive.google.com/file/d/1hAfg4Wli-P4ytlaZXpC6QXFK6yca3bLW/view?usp=sharing"
            target="_blank"
            className="max-sm:w-full "
          >
            <div className="py-2 px-5 max-sm:py-4 max-sm:text-center max-sm:flex max-sm:items-center max-sm:justify-center  rounded-md font-bold bg-red-300 text-sm mt-3">
              Download resume
            </div>
          </Link>
        </div>
        <div className="relative max-sm:mb-10">
          <img
            src={ProfilePic}
            alt=""
            className="w-24 h-24 rounded-full border border-white max-sm:w-32 max-sm:h-32"
          />
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-2xl font-bold text-white relative before:content-[''] before:w-10 before:h-1 before:bg-red-300 before:absolute before:-bottom-2 before:left-0 before:-translate-y-2">
          Work
        </h1>
        <div className="mt-3 text-justify">
          <span className="ml-10 text-white/95 text-lg text-justify">
            Jagdeep is a results-oriented Full-Stack Developer with a proven
            ability to optimize web applications for performance and user
            experience. His experience at Addensure Media LLP showcased his
            skills in <span className="text-red-300">React</span>,{" "}
            <span className="text-red-300">Redux</span>,{" "}
            <span className="text-red-300">Node.js</span>,{" "}
            <span className="text-red-300">Express.js</span>, and{" "}
            <span className="text-red-300">MongoDB</span>, where he
            significantly improved website speed and user engagement. Proficient
            in both frontend and backend development, Jagdeep is adept at
            building scalable and efficient systems. His passion for technology
            is evident in his open-source contributions and personal projects.
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Bio;
