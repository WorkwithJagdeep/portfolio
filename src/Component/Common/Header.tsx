import { AiFillHome } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { IoIosSunny } from "react-icons/io";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

function Header() {
  return (
    <motion.div className="w-full bg-[#212121] py-3 px-5 rounded-xl flex items-center justify-between sticky top-7 z-10">
      <div className="flex items-center">
        <div className="p-2 rounded-full mr-1 bg-[#2b2b2b]">
          <AiFillHome color="white" size={22} />
        </div>
        <div className="px-4 mr-1">
          <FaGraduationCap color="rgba(255,255,255,0.7)" size={22} />
        </div>
        <div className="px-4 mr-1">
          <GoProject color="rgba(255,255,255,0.7)" size={22} />
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <span>LinkedIn</span>
          <FiExternalLink />
        </div>
        <IoIosSunny color="#c5c5c5" size={25} />
        <div className="bg-[#373737] py-1.5 text-sm rounded-md px-4 text-white/90 ml-5">
          Hire me
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
