import  { useState } from "react";
import Logo from "../public/Logoooo.png";
import { FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <div className="pb-20 mx-auto">
      <div className="flex items-center justify-between z-10 fixed w-[1250px] backdrop-blur-3xl">
        <Link to="/" className=" cursor-pointer">
          <img src={Logo} alt="" className="w-[130px] h-[99px] object-cover" />
        </Link>
        <ul
          className={`items-center gap-10 ${showLanguages ? "hidden" : "flex"}`}
        >
          <li className="text-[#ffffff99] font-medium hover:text-white cursor-pointer text-xl">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="text-[#ffffff99] font-medium hover:text-white cursor-pointer text-xl">
            <Link to="/ser">SERVICES</Link>
          </li>
          <li className="text-[#ffffff99] font-medium hover:text-white cursor-pointer text-xl">
            <Link to="/port">PORTFOLIO</Link>
          </li>
          <li className="text-[#ffffff99] font-medium hover:text-white cursor-pointer text-xl">
            <Link to="/car">CAREER</Link>
          </li>
          <li className="text-[#ffffff99] font-medium hover:text-white cursor-pointer text-xl">
            <Link to="/blogs">BLOG</Link>
          </li>
          <li className="text-[#83a3a3] font-medium hover:text-white cursor-pointer text-xl">
            +998 71 <span className="text-white text-xl">200 70 07</span>
          </li>
        </ul>
        <div
          className="relative"
          onMouseEnter={() => setShowLanguages(true)}
          onMouseLeave={() => setShowLanguages(false)}
        >
          <div
            className={`flex cursor-pointer items-center gap-2 border px-2 py-1 border-[#ffffff99] rounded-xl transition-all duration-300 ${
              showLanguages ? "w-[250px] gap-4" : "w-[80px]"
            }`}
          >
            <div className="flex gap-1 items-center">
              <FaGlobeAmericas className="text-[#ffffff99] text-xl" />
              {!showLanguages ? (
                <></>
              ) : (
                <span className="text-[#83a3a3] text-lg"> Language : </span>
              )}
              <span className="text-white font-medium text-xl">EN</span>
            </div>
            {showLanguages && (
              <div className="flex items-center gap-2">
                <span className="text-[#83a3a3] font-medium text-xl">RU</span>
                <span className="text-[#83a3a3] font-medium text-xl">UZ</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
