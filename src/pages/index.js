import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/bighead.svg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Shanto&apos;s Workshop</title>
        <meta name="description" content="Welcome to Shanto's Workshop, the online portfolio of a talented web and app full-stack developer. Explore my website to see examples of my work and learn more about my expertise in building robust and user-friendly applications. With a passion for innovative solutions and a keen eye for design, I strive to create engaging user experiences that exceed expectations. Let's build something great together!" />
      </Head>
      <TransitionEffect/>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className=" pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className=" w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Ashik Ali Shanto"
                className="w-full h-auto lg:hidden md:inline-block md:w-full lg:text-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
              <AnimatedText text = "I'm not a complete stupid, some parts are missing 	&#128541;" className="!text-5xl !text-left
              xl:!text-4xl lg:!text-center lg:!text-4xl md:!text-2xl"/>
              <p className=" my-4 text-base font-medium md:text-sm sm:text-xs">
              Just Kidding.... I&apos;m a full-stack developer with expertise in MERN. I have a passion for creating fast, secure, and user-friendly <span className="text-primary dark:text-primaryDark">app / web applications</span>. I also have experience in game development and building CRMs for companies. I&apos;m well-versed in object-oriented languages and always eager to learn new technologies. If you&apos;re looking for a developer who can bring your unique ideas to life, I&apos;m your person! I love collaborating with clients to create custom solutions that meet their specific needs. So let&apos;s connect and chat about how I can help bring your vision to life.
              </p>
              <div className=" flex items-center self-start mt-2 lg:self-center">
                <Link href="/resume.pdf" target={"_blank"}
                className=" flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark 
                hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                download={true}> Resume 
                <LinkArrow className={"w-6 ml-1"} /> </Link>
                <Link href="mailto:shanto902@gmail.com" target={"_blank"}
                className=" ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base hover:text-primary"> Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
