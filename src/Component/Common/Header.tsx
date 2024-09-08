import { AiFillHome } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { IoIosSunny } from "react-icons/io";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <motion.div className="w-full bg-[#212121] py-3 px-5 rounded-xl flex items-center justify-between sticky top-7 z-10">
      <div className="flex items-center">
        <Link to="/">
          <div className="p-2 rounded-full mr-1 bg-[#2b2b2b]">
            <AiFillHome color="white" size={22} />
          </div>
        </Link>
        {/* <div className="px-4 mr-1">
          <FaGraduationCap color="rgba(255,255,255,0.7)" size={22} />
        </div>
        <div className="px-4 mr-1">
          <GoProject color="rgba(255,255,255,0.7)" size={22} />
        </div> */}
      </div>
      <div className="flex items-center">
        <Link to="https://www.linkedin.com/in/jagdeep56/" target="_blank">
          <div className="mr-5 flex items-center justify-center text-white/80 cursor-pointer">
            <span className="mr-2">LinkedIn</span>
            <FiExternalLink />
          </div>
        </Link>

        <div
          className="bg-[#373737] py-1.5 text-sm rounded-md px-4 text-white/90 ml-5"
          onClick={() => {
            window.location.href =
              "mailto:jagdeepsnh57@gmail.com?subject=Subject%20Here&body=Body%20Here";
          }}
        >
          Hire me
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
