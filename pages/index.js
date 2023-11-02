import Image from "next/image";

import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return <div className="bg-primary/60 h-full">
    {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-35 xl:text-left h-full container mx-auto">
        {/* title */}
        <h1 className="h1">
          Transformando Ideias <br />  para {' '} <span className="text-accent">Realidade Digital</span></h1>
          {/* subtitulo */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
      </div>
    </div>
    {/* image */}
    <div>image</div>
  </div>;
};

export default Home;
