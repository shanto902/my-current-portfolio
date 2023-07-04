import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light
    sm:text-base"
    >
      <Layout className=" py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Right Reserved.</span>
        <div className="flex items-center lg:py-2 ">
        Build with <span className=" text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span> by&nbsp;
        <Link href="https://web.facebook.com/Shanto902/" className=" underline underline-offset-2"> Ashik Ali Shanto</Link>
        </div>
        <Link href="https://wa.me/+8801725468800" target="_blank" className=" hover:underline hover:text-primary dark:hover:text-primaryDark">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
