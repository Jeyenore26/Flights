import React from "react";
import BottomPick from "../components/MainPage/BottomPick";
import Groups from "../components/MainPage/Groups";
import Leaf from "../components/MainPage/Leaf";
import MainNav from "../components/MainPage/MainNav";
export default function mainpage() {
  return (
    <>
      <section className="w-[100%] h-screen bg-slate-200">
        <MainNav />
        <Groups />
        <BottomPick />
        <Leaf/>
      </section>
    </>
  );
}
