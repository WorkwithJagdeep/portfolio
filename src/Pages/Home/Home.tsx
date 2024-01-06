import { useTypewriter } from "react-simple-typewriter";
import { IoSearchSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { useEffect } from "react";

interface Question {
  question: string;
  answer: string;
  expand: boolean;
}

function Home() {
  const [text] = useTypewriter({
    words: ["Jagdeep Singh's Portfolio"],
    loop: 1,
    delaySpeed: 3500,
  });
  useEffect(() => {
    setTimeout(() => {
      window.location.assign("/portfolio");
    }, 3550);
  }, []);
  return (
    <div
      className="bg-[#202124] w-full min-h-screen flex items-center justify-center"
      style={{
        fontFamily: `'Rethink Sans', sans-serif`,
      }}
    >
      <div className="flex flex-col items-center w-full">
        <div>
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            alt="google_logo"
            className="w-80"
          />
        </div>
        <div className="w-1/2 rounded-full bg-[#303134] h-12 mt-9 flex items-center px-6 justify-between">
          <div className="flex items-center">
            <div>
              <IoSearchSharp color="white" fontSize={21} />
            </div>
            <div className="text-white mx-3 text-base">{text}</div>
          </div>
          <div>
            <div>
              <FaMicrophone color="white" />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5">
          <div className="bg-[#303134] py-2 px-7 mx-2 text-sm text-slate-200 rounded">
            Google Search
          </div>
          <div className="bg-[#303134] py-2 px-7 mx-2 text-sm text-slate-200 rounded">
            I'm Feeling Lucky
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
