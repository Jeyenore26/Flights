import React from "react";
import Head from "next/head";
import MultiStep from "../components/CreateGroup/MultiStep";
import NavBar from "../components/CheckGroup/NavBar";
export default function creategroup() {
  return (
    <>
      <Head>
        <title className="cairo_black_title">انضم لنا</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <MultiStep />
    </>
  );
}
