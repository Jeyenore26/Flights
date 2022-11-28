import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title className="cairo_black_title">الصفحة الرئيسية</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav>
        <NavBar />
      </nav>
      <Slider />
    </div>
  );
};

export default Home;
