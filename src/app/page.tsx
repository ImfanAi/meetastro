"use client"
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Tokenomics from "@/components/main/tokenomics";
import { useTheme } from "next-themes";
import AOS from "aos";
import ReactPlayer from "react-player";
import FAQ from "@/components/main/faq";
import Roadmap from "@/components/main/roadmap";
import Team from "@/components/main/team";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import PlayList from "@/components/main/playlist";


export default function Home() {
  const { theme, setTheme } = useTheme();
  const [showPlayer, setShowPlayer] = React.useState<boolean>(false);
  const [movie, setMovie] = React.useState<{ title: string, url: string }>({title: '', url: ''});

  const showMovie = (title: string, url: string) => {
    setMovie ({ title, url });
    setShowPlayer (true);
  }
  const Model = () => {
    const { scene, animations } = useGLTF('/idle.glb');
    const { actions } = useAnimations(animations, scene);
    console.log(actions);
    React.useEffect(() => {
      if(actions) {
        actions.idle?.setLoop(THREE.LoopRepeat, Infinity);
        actions.idle?.play();
      }
    }, [actions]);
    return <primitive object={scene} scale={2} position={[0, -2, 0]}/>;
  };

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="dark:bg-[#0d0a1cfa] bg-[#a35ed4d2]">
      <section>
        <div className="bg-[url('/back.jpg')] bg-no-repeat bg-cover bg-center w-full h-[600px] md:h-screen flex justify-center items-center">
          {/* <div className="w-full md:w-1/2 h-full z-20">
            <Canvas>
              <ambientLight intensity={3} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <directionalLight position={[-5, 5, 5]} intensity={0.5} />
              <spotLight position={[15, 20, 5]} angle={0.3} intensity={0.8} />
              <Model />
            </Canvas>
          </div> */}
          {/* <div className="relative hidden w-1/2 md:block text-green-800 dark:text-white text-2xl leading-6 lg:text-3xl xl:text-4xl lg:leading-10 mt-[500px] text-center"> */}
            {/* <h1 className="mb-5 md:text-4xl lg:text-6xl font-zing font-bold">
              MEET Astro
            </h1> */}
            {/* <p className="text-center font-zing">
              Your own 3D AI companion, A combination of AI, gaming, entertainment, and decentralized finance (DeFi) all wrapped in one.
            </p> */}
          {/* </div> */}
        </div>
      </section>
      {/* <section>
        <div className="mt-10 md:hidden dark:text-white text-2xl leading-10 lg:text-3xl xl:text-4xl lg:leading-10 px-3">
          <p
            className="text-justify"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            Your own 3D AI companion, A combination of AI, gaming, entertainment, and decentralized finance (DeFi) all wrapped in one.
          </p>
        </div>
      </section> */}
      <Tokenomics />
      <Roadmap />
      <section>
        <div
          id="joinus"
          className="!font-sans text-center w-full mt-[50px] md:mt-[200px]"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h2 className="text-2xl md:text-5xl text-white">Join Our Community</h2>
          <h3 className="!font-sans text-2xl font-bold dark:text-white text-white mt-10">
            Connect with fellow DeFAi farmers and cultivate collective growth in a harmonious ecosystem.
          </h3>
          <div className="flex justify-center gap-5 !font-sans font-bold text-sm  sm:text-2xl mt-10">
            <a href="https://x.com/MeetAstroAI" target="_blank" className="bg-[#FF951A] p-5 rounded-lg flex gap-2 items-center justify-center">
              <span className="hidden md:inline text-white">Twitter&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <Icon icon="akar-icons:twitter-fill" className="text-xl sm:text-4xl text-white" />
            </a>
            <a href="https://t.me/+oh9HXznG6eg5ZTI1" target="_blank" className="bg-[#FF951A] p-5 rounded-lg flex gap-2 items-center justify-center">
              <span className="hidden md:inline text-white">Telegram</span>
              <Icon icon="teenyicons:telegram-outline" className="text-xl sm:text-4xl text-white" />
            </a>
            <a href="https://www.tiktok.com/@meetastroai" target="_blank" className="bg-[#FF951A] p-5 rounded-lg flex gap-2 items-center justify-center">
              <span className="hidden md:inline text-white">Tiktok&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <Icon icon="simple-icons:tiktok" className="text-xl sm:text-4xl text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* <Team/> */}


      {/* <div
        id="howtobuy"
        className="!font-sans text-center w-full mt-[50px] md:mt-[200px]"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <h2 className="text-2xl md:text-5xl text-yellow-300">How To Buy</h2>
        <div className="w-full mt-20 min-h-[200px] px-5 relative rounded-2xl flex items-center justify-center">
          <Image
            src={"/back.jpg"}
            height={0}
            width={0}
            sizes="100vw"
            alt="how to buy"
            className="rounded-xl w-full md:w-2/3 lg:w-1/2 aspect-video"
          />
          <div className="flex justify-center items-center absolute w-2/3 md:w-1/2 lg:w-1/4 aspect-[3/1] rounded-2xl bg-[#00000079] px-[2.5%] py-[2.5%]">
            <Icon onClick={() => showMovie('How to Buy', 'https://www.youtube.com/watch?v=To6mgsB2VPo')} icon="fluent:play-12-regular" className="w-1/2 h-full text-white cursor-pointer opacity-60 hover:opacity-100" />
            <a href="https://www.youtube.com/watch?v=To6mgsB2VPo" target="_blank" className="w-1/2 h-full flex items-center justify-center">
              <Icon icon="humbleicons:external-link" className="w-1/2 h-full text-white cursor-pointer opacity-60 hover:opacity-100" />
            </a>
          </div>
        </div>
      </div> */}

      {
        showPlayer &&
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
          <div onClick={() => setShowPlayer(false)} className="fixed top-0 left-0 right-0 bottom-0 bg-[#000000a2]"></div>
          <div className="flex justify-center w-full">
            <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
              <div className="absolute right-1 top-1 -z-1 w-[200px] h-20 rounded-2xl bg-[#ec4040]"></div>
              <div className="w-full flex flex-col rounded-2xl h-full clip bg-[#1F193E] px-6 pt-10 pb-2 rounded-tr-[55px] border-b border-white]">
                <ReactPlayer
                  controls
                  url={movie.url}
                  playing={true}
                  width='100%'
                  className="rounded-xl w-full aspect-video"
                />
                <h1 className="text-white text-[16px] mt-2">
                  {movie.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      }
      
      {/* <PlayList onPlay={showMovie}/> */}

      <FAQ />
    </main>
  );
}


