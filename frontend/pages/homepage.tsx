import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import SideText from "../components/SideText";
import Problems from "../components/Problems";
import Goals from "../components/Goals";
import Join from "../components/Join";
import Footer from "../components/Footer";
import EarthImg from "../components/EarthImg";

const homepage: NextPage = () => {
  return (
    <div>
      <Head>
        <title className="cairo_black_title">الصفحة الرئيسية</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <EarthImg />
      <nav>
        <NavBar />
      </nav>
      <section>
        <SideText />
      </section>
      <Problems />
      <Goals />
      <Join />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default homepage;
