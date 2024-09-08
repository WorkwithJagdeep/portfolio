import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../Component/Common/Header";
import Career from "../../Component/Home/Career";
import Education from "../../Component/Home/Education";
import Projects from "../../Component/Home/Projects";
import Bio from "../../Component/Home/Bio";

function Home() {
  const [pointX, setPointX] = useState<number>(0);
  const [pointY, setPointY] = useState<number>(0);
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
        <Bio />
        <Career />
        <Projects />
        <Education />
      </div>
    </div>
  );
}

export default Home;
