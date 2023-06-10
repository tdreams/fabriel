import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { FiArrowUpRight } from "react-icons/fi";

import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";

const ProjectCard = ({
  id,
  name,
  description,
  tags,
  image,
  source_code_link,
  web_url,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", id * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer  opacity-75 hover:opacity-100"
            >
              <img
                src={github}
                alt={github}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3
            className="text-white font-bold text-[20px] cursor-pointer"
            onClick={() => window.open(web_url, "_blank")}
          >
            <div className="flex items-center group">
              {name}
              <FiArrowUpRight className="group-hover:mb-2 group-hover:ml-2 transition-all duration-300 ease-in-out] group-hover:text-gray-500" />
            </div>
          </h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The projects I have completed are powerful demonstrations of my
          exceptional skills and experience. Each project represents a
          real-world application of my abilities and includes a brief
          description, as well as links to both its code repository and live
          demo. These examples of my work attest to my capacity to navigate
          complex challenges, work effectively with a range of technologies, and
          manage projects with skill and expertise. As a result, I am confident
          that my abilities and experience make me an exceptional candidate for
          any project or client seeking outstanding results.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
};

export default Works;
