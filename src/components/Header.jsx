import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Tech from "./Tech";

const Header = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "about", name: "About" },
        { id: "certificates", name: "Certificates" },
        { id: "projects", name: "Projects" },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let activeSectionId = null;

      for (const section of sections) {
        const sectionElement = document.getElementById(section.id);

        if (
          sectionElement &&
          scrollPosition >= sectionElement.offsetTop &&
          scrollPosition <
            sectionElement.offsetTop + sectionElement.offsetHeight
        ) {
          activeSectionId = section.id;
          break;
        }
      }

      setActiveSection(activeSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call the function on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = [
    { id: "about", name: "About" },
    { id: "certificates", name: "Certificates" },
    { id: "projects", name: "Projects" },
  ];

  return (
    <div>
      <header className="lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
        <div className="flex flex-col lg:flex-row gap-10 text-left sm:align-baseline">
          <div>
            <img
              src="/fabriel.jpg"
              alt="Profile photo"
              className="rounded-full"
            />
          </div>
          <div>
            <div className="text-4xl font-bold tracking-tight text-slate-200 sm:text-4xl">
              Fabriel Mbeng
            </div>
            <div className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              UX/UI Designer and Web Developer
            </div>
            <div className="mt-4 max-w-xs leading-normal">
              I build accessible, inclusive products and digital experiences for
              the web.
            </div>
            <nav className="nav hidden lg:block">
              <ul className="mt-16 w-max">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      className={`group flex items-center py-3 ${
                        activeSection === section.id ? "active" : ""
                      }`}
                      href={`#${section.id}`}
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500">
                        {section.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="">
              <ul
                className="ml-1 mt-8 flex items-center absolute lg:top-[40rem] xl:-bottom-[30vh]"
                aria-label="social media"
              >
                <li className="mr-5 text-2xl">
                  <a
                    className="block hover:text-slate-200"
                    href="https://github.com/tdreams"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="mr-5 text-2xl">
                  <a
                    className="block hover:text-slate-200"
                    href="https://www.linkedin.com/in/fabriel-mbeng-44969b1a5/"
                  >
                    <AiFillLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Tech />
      </header>
    </div>
  );
};

export default Header;
