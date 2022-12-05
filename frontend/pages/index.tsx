import type { NextPage } from "next";
import Head from "next/head";

import Scene from "../components/Scene";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title className="cairo_black_title"> انقذ الارض</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Scene></Scene>
    </div>
  );
};

export default Home;
