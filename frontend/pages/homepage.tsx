import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeNavBar from "../components/HomeNavBar";
import SideText from "../components/SideText";
import Problems from "../components/Problems";
import Goals from "../components/Goals";
import Footer from "../components/Footer";
import Earthing from "../components/Earthing";
const homepage: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title className="cairo_black_title">الصفحة الرئيسية</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Earthing />
        <nav className="mx-[1rem] sm:mx-[4rem]">
          <HomeNavBar />
        </nav>

        <SideText />

        <Problems />
        <Goals />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default homepage;
