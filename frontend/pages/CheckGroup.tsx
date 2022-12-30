import React, { useState } from "react";
import Donate from "../components/CheckGroup/Donate";
import Group from "../components/CheckGroup/Group";
import NavBar from "../components/CheckGroup/NavBar";
import axios from "axios";
import { useMutation } from "@apollo/client";
import { joinGroupMutation } from "../lib/mutationGql/CreateGql";
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

  if (typeof window !== "undefined" && (!data || data.length == 0)) {
    const token = localStorage.getItem("token") as string;
    const groupName = localStorage.getItem("groupname") as string;
    load(
      `http://localhost:5000/check/group/${groupName}`,
      token,
      groupName
    ).then((res: any) => {
      setdata(res.data.onegroup);
      setowner(res.data.owner);
      // setmembers(res.data.owner.members);
      // setadmin(res.data.owner.admin);

      localStorage.removeItem("groupName");
    });
    //@ts-ignore
    console.log(data.members);
  }
  const [JoinGroup, { loading, error, data: Schedules }] = useMutation(
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
  console.log(data);
  const [page, setpage] = useState(1);

  return (
    <>
      <section className="bg-white h-screen w-full">
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
            <div className="mx-[2rem] mt-4">
              <div dir="rtl" className="flex justify-between ">
                <div>
                  <h1 className="text-black cairo_bold_title text-[20px]">
                    {/*@ts-ignore*/}

                    {data.name}
                  </h1>
                  <div dir="rtl" className="flex justify-start mt-1">
                    <h1 className="text-black/60 cairo_bold_title text-[15px] ml-3 ">
                      {/*@ts-ignore*/}

                      {data.workplace}
                    </h1>
                    <h1 className=" cairo_bold_title text-[15px] text-white">
                      .
                    </h1>
                    <h1 className="text-black/60 cairo_bold_title text-[13px] mt-1 mr-2">
                      {/*@ts-ignore*/}

                      {data.phone}
                    </h1>
                  </div>
                </div>
                <button
                  onClick={() => {
                    JoinGroup();
                  }}
                  className="bg-[#39A059] hover:bg-[#277941] active:bg-[#235e35] hover:text-white/40 active:text-white/70 md:px-8 xxs:py-2 py-2 xxs:px-4 md:text-[17px] mb-10 text-white rounded-lg"
                >
                  انضم للمجموعة
                </button>
              </div>
            </div>
          </section>
          <section>
            <div dir="rtl" className="flex justify-center ">
              <span
                onClick={() => {
                  setpage(1);
                }}
                className={
                  page === 1
                    ? "text-[#754b5a] transition-1 cairo_regular_title cursor-pointer text-[15px] border-b-2 border-[#754b5a] py-1 mr-5 mb-2"
                    : "text-black hover:text-black/40 active:text-black/80 cairo_regular_title border-b-2 border-white cursor-pointer text-[15px] py-1 mr-5 mb-2"
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
                    ? "text-[#754b5a] transition-1 cairo_regular_title cursor-pointer text-[15px] border-b-2 border-[#754b5a] py-1 mr-5 mb-2"
                    : "text-black hover:text-black/40 active:text-black/80 cairo_regular_title border-b-2 border-white cursor-pointer text-[15px] py-1 mr-5 mb-2"
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
