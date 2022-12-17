import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeNavBar from "../components/HomePage/HomeNavBar";
import SideText from "../components/HomePage/SideText";
import Problems from "../components/HomePage/Problems";
import Goals from "../components/HomePage/Goals";
import Footer from "../components/HomePage/Footer";
import Earthing from "../components/HomePage/Earthing";
import HomeTopSection from "../components/HomePage/HomeTopSection";
import HomeExplanation from "../components/HomePage/HomeExplanation";

const homepage: NextPage = () => {
  return (
    <>
      <Head>
        <title className="cairo_black_title">الصفحة الرئيسية</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeTopSection />
      <HomeExplanation />

      {/* <Problems /> 
        <Goals />

      <footer>
        <Footer />
      </footer>  */}
    </>
  );
};

export default homepage;
