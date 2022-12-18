import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeNavBar from "../components/HomePage/HomeNavBar";
import SideText from "../components/HomePage/SideText";
import Problems from "../components/HomePage/Problems";
import Goals1 from "../components/HomePage/Goals1";
import Footer from "../components/HomePage/Footer";
import Earthing from "../components/HomePage/Earthing";
import HomeTopSection from "../components/HomePage/HomeTopSection";
import Problem from "../components/HomePage/Problem";

const homepage: NextPage = () => {
  return (
    <>
      <Head>
        <title className="cairo_black_title">الصفحة الرئيسية</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeTopSection />
      <Problem />
      <Goals1/>
      {/* <Problems /> 
        <Goals />

      <footer>
        <Footer />
      </footer>  */}
    </>
  );
};

export default homepage;
