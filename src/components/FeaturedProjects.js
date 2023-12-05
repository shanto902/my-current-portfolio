import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";

export const FeaturedProjects = ({
  type,
  title,
  summery,
  img,
  link,
  githubClientSide,
  githubServerSide,
  technology,
}) => {
  const FramerImage = motion(Image);
  return (
    <article className=" w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border-2 border-solid border-dark bg-light shadow-2xl p-12  dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>

      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {" "}
          {type}{" "}
        </span>
        <Link href={link} target="_blank">
          <h2 className=" my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <ul className="list-disc ml-4">
          {summery.split("•").map((item, index) => (
            <li
              key={index}
              className="my-2 font-medium text-dark dark:text-light sm:text-sm"
            >
              {item.trim()}
            </li>
          ))}
        </ul>

        {technology && (
          <div className=" italic text-xs my-2">
            {" "}
            <span className="font-bold">Technologies</span>: {technology}
          </div>
        )}
        <div className=" mt-2 flex items-center justify-between w-full">
          {githubClientSide && (
            <div className="dropdown dropdown-hover">
              <GithubIcon
                tabIndex={0}
                className="!w-10  h-auto cursor-pointer"
              />

              <div
                tabIndex={0}
                className="dropdown-content z-[1] card card-compact w-56 md:w-48  drop-shadow-2xl dark:bg-dark bg-light text-dark border-b-8 border-r-8 border-t border-l  border-dark dark:border-light dark:text-light"
              >
                <div className="card-body">
                  <Link
                    href={githubClientSide}
                    target="_blank"
                    className=" ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border-2 border-solid border-dark hover:border-dark hover:bg-light hover:text-dark
              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-4 sm:text-base"
                  >
                    Client Side
                  </Link>
                  <Link
                    href={githubServerSide}
                    target="_blank"
                    className=" ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border-2 border-solid border-dark hover:border-dark hover:bg-light hover:text-dark
              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-4 sm:text-base"
                  >
                    Server Side
                  </Link>
                </div>
              </div>
            </div>
          )}
          <Link
            href={link}
            target="_blank"
            className=" ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border-2 border-solid border-dark hover:border-dark hover:bg-light hover:text-dark
              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
