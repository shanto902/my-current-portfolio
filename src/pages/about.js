import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import profilePic from "../../public/images/profile/shanto-pic.jpeg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { Audio, RotatingSquare } from "react-loader-spinner";
import { PlayVideoIcon } from "@/components/Icons";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";


const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const VideoPlayer = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useThemeSwitcher();
  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="video-container aspect-1">
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center flex-col">
          <RotatingSquare
            height="100"
            width="100"
            color={`${mode === "dark" ? "#f5f5f5" : "#1b1b1b" }`}
            ariaLabel="rotating-square-loading"
            strokeWidth="4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />

          <p>Loading</p>
        </div>
      )}
      <video
        src={src}
        controls
        autoPlay
        className={`aspect-1 object-cover shadow-lg rounded-xl ${
          isLoading ? "hidden" : ""
        }`}
        onLoadedData={handleVideoLoad}
      ></video>
    </div>
  );
};

const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <Head>
        <title>About | Shanto&apos;s Workshop</title>
        <meta name="description" content="my description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className=" pt-16 ">
          <AnimatedText
            text="This is me"
            className=" mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className=" grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-10">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hey there, I&apos;m Ashik Ali Shanto, a web and app developer
                with a passion for creating innovative solutions to complex
                problems.
              </p>

              <p className=" my-4 font-medium">
                My journey into the world of software development started with
                Android Studio, where I honed my skills in building robust and
                user-friendly applications. Also I&apos;m also an accomplished
                Unity3D developer, having created two captivating games based on
                C#.
              </p>

              <p className=" font-medium">
                From there, I expanded my knowledge to become a MERN full-stack
                developer. This allowed me to broaden my skills to include
                backend development, opening up a whole new world of
                possibilities for my projects. I love working with MongoDB,
                Express.js, React, and Node.js and using them to develop
                efficient and scalable applications that are able to handle a
                wide range of demands.
              </p>
            </div>
            <div className="col-span-3 lg:col-span-4 sm:col-span-10 md:col-span-8  relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              {!showVideo && (
                <div
                  className=" aspect-1 w-full h-auto rounded-2xl relative cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick}
                >
                  <Image
                    src={profilePic}
                    alt="Ashik Ali Shanto"
                    className={`w-full h-full rounded-2xl transition-opacity duration-300 ${
                      isHovered ? "opacity-25" : ""
                    }`}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  />
                  {isHovered && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">
                      <PlayVideoIcon className={`fill-dark dark:fill-light`}/>
                    </div>
                  )}
                </div>
              )}

              {showVideo && (
                <VideoPlayer src="https://drive.google.com/uc?id=1VcTc8xrDeOxTVjmNFfV-UcVGWMrYR7Cc" />
              )}
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between  xl:flex-row xl:col-span-10 xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl ">
                  <AnimatedNumbers value={9} />+
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span
                  className="inline-block text-7xl font-bold 
                md:text-6xl sm:text-5xl xs:text-4xl"
                >
                  <AnimatedNumbers value={12} />+
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
