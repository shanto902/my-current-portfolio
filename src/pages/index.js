import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/lottie.json";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import Lottie from "react-lottie-player";
// CommonJS

export default function Home() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          form.current.reset();
          setLoading(false);
          setMessage("Email sent successfully!");
          window.my_modal_2.close();
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Email Sent Successfully",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: "dark:bg-dark dark:text-light rounded-xl",
            },
          });
        },
        (error) => {
          setLoading(false);

          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something Went Wrong! Please Try again",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: "dark:bg-dark dark:text-light rounded-xl",
            },
          });
          setMessage("Failed to send email. Please try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Home | Shanto&apos;s Workshop</title>
        <meta
          name="description"
          content="Welcome to Shanto's Workshop, the online portfolio of a talented web and app full-stack developer. Explore my website to see examples of my work and learn more about my expertise in building robust and user-friendly applications. With a passion for innovative solutions and a keen eye for design, I strive to create engaging user experiences that exceed expectations. Let's build something great together!"
        />
      </Head>
      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Lottie loop animationData={profilePic} play />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
              <AnimatedText
                text="Hi! I am Ashik&nbsp;Ali&nbsp;Shanto"
                className="!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-4xl md:!text-2xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I&apos;m a full-stack developer with expertise in MERN. I have a
                passion for creating fast, secure, and user-friendly{" "}
                <Link href={`/projects`} className={`relative group`}>
                  <span className="text-primary dark:text-primaryDark">
                    app / web applications
                  </span>
                </Link>{" "}
                . I also have experience in game development and building CRMs
                for companies. I&apos;m well-versed in object-oriented languages
                and always eager to learn new technologies. If you&apos;re
                looking for a developer who can bring your unique ideas to life,
                I&apos;m your person! I love collaborating with clients to
                create custom solutions that meet their specific needs. So
                let&apos;s connect and chat about how I can help bring your
                vision to life. Wanna know more about myself??{" "}
                <Link href={`/about`} className={`relative group`}>
                  <span className="text-primary dark:text-primaryDark">
                    Check Out My profile
                  </span>
                </Link>
              </p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Ashik_Ali_Shanto_Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <button
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base hover:text-primary"
                  onClick={() => window.my_modal_2.showModal()}
                >
                  Contact
                </button>
              </div>

              <dialog id="my_modal_2" className="modal">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  method="dialog"
                  className="modal-box dark:bg-dark"
                >
                  <h3 className="font-bold text-lg dark:text-white text-center">
                    Drop me a Line
                  </h3>
                  <div className="form-control my-4">
                    <input
                      name="user_name"
                      type="text"
                      placeholder="Enter Your Name"
                      className="input input-bordered dark:bg-dark dark:caret-light dark:text-light"
                      required
                    />
                  </div>
                  <div className="form-control my-4">
                    <input
                      name="user_email"
                      type="email"
                      placeholder="Enter Your Email"
                      className="input input-bordered  dark:bg-dark dark:caret-light dark:text-light"
                      required
                    />
                  </div>
                  <div className="form-control my-4">
                    <textarea
                      name="message"
                      type="text"
                      required
                      placeholder="Please Write Your Opinion or Any Feedbacks"
                      className="textarea textarea-bordered  dark:bg-dark dark:caret-light dark:text-light"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button
                      className="bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Email"}
                    </button>
                  </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
