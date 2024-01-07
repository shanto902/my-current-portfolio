import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Head from "next/head";

import Link from "next/link";
import React from "react";

import project1 from "../../public/images/projects/run-shadow-run-banner.jpg";
import project2 from "../../public/images/projects/lehalua-banner.png";
import project3 from "../../public/images/projects/nebula-banner.jpeg";
import project4 from "../../public/images/projects/dwd-globa-edu-banner.png";
import project5 from "../../public/images/projects/pregnant2parenting.png";
import project6 from "../../public/images/projects/amena-banner.png";
import project7 from "../../public/images/projects/servicechai-banner.png";
import project8 from "../../public/images/projects/musically.png";
import project9 from "../../public/images/projects/bistro_boss.png";
import project10 from "../../public/images/projects/toy-verse.png";
import project13 from "../../public/images/projects/sthapattya-nirman.jpeg";
import TransitionEffect from "@/components/TransitionEffect";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Project } from "@/components/Projects";

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Shanto&apos;s Workshop</title>
        <meta name="description" content="my description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className=" pt-16">
          <AnimatedText
            text="Dive into My Project Showcase"
            className=" mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl 
            xs:!text-4xl"
          />
          <div className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className=" col-span-12">
              <FeaturedProjects
                title="Sthapattaya O Nirman"
                img={project13}
                summery="Welcome to Sthapttya O Nirman, a haven by Building for Future. Immerse yourself in curated articles on innovative designs, sustainability, and cutting-e dge technologies.

                🌐 Tech-Powered Exploration •
                Next.js 14, Directus CMS, AWS S3, and Tailwind CSS form the backbone, ensuring a seamless, tech-forward experience on any device.
                
                🌍 Global Insight, Local Experience •
                Multilingual support (i18n) invites a global audience to engage with the latest architectural trends and innovations.
                
                🎨 Tailored Design Excellence •
                Crafted with UI/UX maestro Ashiqur Rahman, our custom interface promises a visually stunning and user-friendly journey.
                
                🔗 Connect and Engage •
                Join our community, connect with architectural visionaries, and stay updated on the latest. Embark on an inspiring journey with Sthapttya O Nirman. Your gateway to the extraordinary awaits!"
                link="https://sthapattya-o-nirman.com/"
                // githubClientSide="https://github.com/shanto902/Toy-Verse-Client"
                // githubServerSide="https://github.com/shanto902/Toy-Verse-Server"
                type="Next JS Website"
                technology="next.js, Directus, Typescript, Vercel, Tailwind CSS, Git, AWS"
              />
            </div>
            <div className=" col-span-12">
              <FeaturedProjects
                title="Musically"
                img={project8}
                summery="Designed and developed a clean and modern website using Mongo, Express, ReactJs, Node
                • Optimized website for speed and user experience
                • Utilized responsive design to ensure compatibility across all devices
                • Used Tailwind CSS"
                link="https://vocal-vista.web.app/"
                githubClientSide="https://github.com/shanto902/Musically"
                githubServerSide="https://github.com/shanto902/Musically-Server-Side"
                type="MERN Website"
                technology="React.js, React Router, Firebase, Tailwind, Node, Express, MongoDB, Git"
              />
            </div>

            <div className=" col-span-12">
              <FeaturedProjects
                title="Bistro Boss"
                img={project9}
                summery="A CRUD application exposed using a RESTful API made with Node.js
                • Exposed POST, GET, PATCH and DELETE HTTP methods using Express
                • Used TailwindCSS"
                link="https://bistro-boss-6004a.web.app/"
                githubClientSide="https://github.com/shanto902/bistro-boss-client"
                githubServerSide="https://github.com/shanto902/bistro-boss-server"
                type="MERN Website"
                technology="Node.js, Express, JavaScript, Firebase, Tailwind CSS, Git"
              />
            </div>

            <div className=" col-span-12">
              <FeaturedProjects
                title="Toy Verse"
                img={project10}
                summery="Developed a responsive website for Toy House using ReactJS, Node.js, and Express
                • Implemented optimizations for improved website speed and enhanced user experience
                • Utilized Tailwind CSS framework to ensure compatibility across various devices"
                link="https://toy-verse-6649e.web.app/"
                githubClientSide="https://github.com/shanto902/Toy-Verse-Client"
                githubServerSide="https://github.com/shanto902/Toy-Verse-Server"
                type="MERN Website"
                technology="Node.js, Express, JavaScript, Firebase, Tailwind CSS, Git"
              />
            </div>

            <div className=" col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Lehalua Website"
                img={project2}
                link="https://lehalua.com/"
                type="Wordpress E-Commerce"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12">
              <Project
                title="DWD Global Education"
                img={project4}
                link="https://dwdglobaledu.com/"
                type="Wordpress Website"
              />
            </div>

            <div className=" col-span-12 ">
              <FeaturedProjects
                title="Pregnant2Parenting"
                img={project5}
                summery="It’s a native app, developed on Android Studio with Java Language. Became 2nd in ranking on UK global pregnant app category in 2019"
                link="https://play.google.com/store/apps/details?id=com.deshiinc.pregnant2parenting"
                type="Android App"
              />
            </div>

            <div className=" col-span-6 sm:col-span-12">
              <Project
                title="Amena BD"
                img={project6}
                link="https://amena.com.bd/"
                type="Website"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12">
              <Project
                title="ServiceChai LTD"
                img={project7}
                link="https://servicechai.com/"
                type="Wordpress Website"
              />
            </div>
            <div className=" col-span-12">
              <FeaturedProjects
                title="Run Shadow Run"
                img={project1}
                summery="It’s an endless running 2D platform mobile game, made on Unity3D with C# language."
                link="https://apkcombo.com/run-shadow-run/com.deshiinc.runshadowrun/"
                type="Android Game"
              />
            </div>

            {/* <div className=" col-span-6 sm:col-span-12">
              <Project
                title="Dipalo Ventures"
                img={project11}
                link="https://dipaloventures.com/"
                type="Wordpress Website"
              />
            </div>

            <div className=" col-span-6 sm:col-span-12">
              <Project
                title="Dipalo Ventures Built Tech"
                img={project12}
                link="https://www.dvbt.pt/"
                type="Wordpress Website"
              />
            </div> */}

            <div className=" col-span-12 ">
              <FeaturedProjects
                title="Nebula"
                img={project3}
                summery="It’s an eight Level 2d Platform Game with Boss Mode, Where hero have to rescue his Heroine from villain. Made on Unity3D with C# Language."
                link="https://mega.nz/file/QtQRxSKT#8UTz223bOGnINdrY5wg7Do2W5X-6hFJ63jn-IV6kpog"
                type="Android Game"
              />
            </div>
          </div>
        </Layout>
      </main>
      ;
    </>
  );
};

export default projects;
