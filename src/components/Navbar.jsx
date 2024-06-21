import React, { useEffect, useRef, useState } from "react";
import Logo from "../../public/Logoooo.png";
import { FaGlobeAmericas } from "react-icons/fa";

const Navbar = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        navRef.current.classList.add("backdrop-blur-lg");
      } else {
        navRef.current.classList.remove("backdrop-blur-lg");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pb-20">
      <div
        className="flex items-center justify-between z-10 fixed w-[1200px]"
        ref={navRef}
      >
        <img src={Logo} alt="" className="w-[130px] h-[99px] object-cover" />
        <ul
          className={`items-center gap-10 ${showLanguages ? "hidden" : "flex"}`}
        >
          <li className="text-[#ffffff99] font-medium hover:text-white cursor-pointer text-xl">
            ABOUT US
          </li>
          <li className="text-[#ffffff99] font-medium hover:text-white cursor-pointer text-xl">
            SERVICES
          </li>
          <li className="text-[#ffffff99] font-medium hover:text-white cursor-pointer text-xl">
            PORTFOLIO
          </li>
          <li className="text-[#ffffff99] font-medium hover:text-white cursor-pointer text-xl">
            CAREER
          </li>
          <li className="text-[#ffffff99] font-medium hover:text-white cursor-pointer text-xl">
            BLOG
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

export default Navbar;
