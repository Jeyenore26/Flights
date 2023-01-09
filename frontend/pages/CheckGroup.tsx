import React, { useState } from "react";
import Donate from "../components/CheckGroup/Donate";
import Group from "../components/CheckGroup/Group";
import NavBar from "../components/CheckGroup/NavBar";
import axios from "axios";
import { useMutation } from "@apollo/client";
import { joinGroupMutation } from "../lib/mutationGql/CreateGql";
import BACKENDURL from "../lib/rest";
import Router from "next/router";

function load(url, token, groupName) {
  return new Promise(async function (resolve, reject) {
    const res = await axios({
      method: "GET",
      url: url,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    // resolve
    resolve(res); // see note below!
  });
}
function getToken() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token;
}
export default function checkgroup() {
  const token = getToken();

  let [data, setdata] = useState<string[]>([]);
  let [owner, setowner] = useState("");
  const [dis, setdis] = useState(false);
  if (typeof window !== "undefined" && (!data || data.length == 0)) {
    const token = localStorage.getItem("token") as string;
    const groupName = localStorage.getItem("groupname") as string;
    load(`${BACKENDURL}/check/group/${groupName}`, token, groupName).then(
      (res: any) => {
        setdata(res.data.onegroup);
        setowner(res.data.owner);
        if (res.data.user.memberOf != null) {
          setdis(false);
          Router.push("/mainpage");
        }
        localStorage.removeItem("groupName");
      }
    );
    //@ts-ignore
    console.log(data.members);
  }
  const [JoinGroup, { loading, error, data: joinData }] = useMutation(
    joinGroupMutation,
    {
      context: {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
      variables: {
        //@ts-ignore
        groupName: data.name,
      },
    }
  );

  const [page, setpage] = useState(1);

  return (
    <>
      <section className=" h-screen w-full">
        <NavBar />

        <div className=" w-full h-max">
          <section className="xl:mx-[20rem]">
            <img src="./asia.jpg" className="h-[22.8rem] w-full" />
            <div className="bg-[#39A059] w-full h-10 rounded-b-lg flex justify-end ">
              <span className="cairo_regular_title flex mt-1 mr-5 text-white justify-center">
                {/*@ts-ignore*/}
                <span className="text-white/80 mx-1">{owner.name}</span> مجموعة
                تتم إدارتها بواسطة
              </span>
            </div>
            <div className="mt-4 mx-2 sm:mx-[2rem]">
              <div dir="rtl" className="flex justify-between gap-3">
                <div>
                  <h1 className="text-black cairo_bold_title text-[20px]">
                    {/*@ts-ignore*/}
                    {data.name}
                  </h1>
                  <div
                    dir="rtl"
                    className="flex justify-start items-center  mt-1"
                  >
                    <h1 className="text-black/60 cairo_bold_title text-[15px] ml-3 ">
                      {/*@ts-ignore*/}
                      {data.workplace}
                    </h1>
                    <h1 className=" cairo_bold_title text-[15px] ">.</h1>
                    <h1 className="text-black/60 cairo_bold_title text-[15px] mr-2">
                      {/*@ts-ignore*/}
                      {data.phone}
                    </h1>
                  </div>
                </div>
                <button
                  disabled={dis}
                  onClick={() => {
                    JoinGroup();
                    Router.push("/mainpage");
                  }}
                  className="bg-[#39A059] hover:bg-[#277941] active:bg-[#235e35] hover:text-white/40 active:text-white/70 p-2 md:text-[17px] mb-10 text-white rounded-lg"
                >
                  انضم للمجموعة
                </button>
              </div>
            </div>
          </section>
          <section>
            <div dir="rtl" className="flex justify-center items-center ">
              <span
                onClick={() => {
                  setpage(1);
                }}
                className={
                  page === 1
                    ? "text-[#754b5a] transition-1 cairo_regular_title cursor-pointer text-[15px] border-b-2 border-[#754b5a] ml-3 py-1 mb-2"
                    : "text-black hover:text-black/40 active:text-black/80 cairo_regular_title border-b-2  cursor-pointer text-[15px] ml-3 py-1 mb-2"
                }
              >
                المجموعة
              </span>

              <span
                onClick={() => {
                  setpage(2);
                }}
                className={
                  page === 2
                    ? "text-[#754b5a] transition-1 cairo_regular_title cursor-pointer text-[15px] border-b-2 border-[#754b5a] py-1  mb-2"
                    : "text-black hover:text-black/40 active:text-black/80 cairo_regular_title border-b-2  cursor-pointer text-[15px] py-1  mb-2"
                }
              >
                ساعدنا
              </span>
            </div>
          </section>
        </div>
        {page === 1 && (
          <>
            {/*@ts-ignore*/}

            <Group workplace={data.workplace} description={data.description} />
          </>
        )}
        {page === 2 && (
          <>
            {/*@ts-ignore*/}

            <Donate paypal={data.paypalName} />
          </>
        )}
      </section>
    </>
  );
}
