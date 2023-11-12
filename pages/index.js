import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-35 xl:text-left h-[120%] container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            {" "}
            Transformando Ideias <br /> em{" "}
            <span className="text-accent">Realidade Digital</span>
          </motion.h1>
          {/* subtitulo */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Sou um Desenvolvedor Front-end com experiência na criação de interfaces web responsivas e dinâmicas. Tenho um sólido domínio de HTML, CSS e JavaScript, e também estou familiarizado com frameworks como React.
          </motion.p>
          {/* btn */}
          <motion.div 
            className="flex justify-center xl:hidden relative"
            animate="show"
            variants={fadeIn("up", 0.5)}
            >
            <ProjectsBtn />
          </motion.div>
          
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1000px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{duration: 1, ease: 'easeInOut'}}
          className="w-full h-full max-w-[450px] max-h-[880px] absolute lg:bottom-[-47%] lg:right-[14%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
