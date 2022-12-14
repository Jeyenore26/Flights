import React from "react";
import { useState } from "react";
import { BiCrown } from "react-icons/bi";
import { GiArmorDowngrade, GiArmorUpgrade, GiBootKick } from "react-icons/gi";
import { gql, useMutation } from "@apollo/client";

import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { PromoteMutation } from "../../lib/mutationGql/CreateGql";
import { DemoteMutation } from "../../lib/mutationGql/CreateGql";
import { kickMutation } from "../../lib/mutationGql/CreateGql";

function getToken() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token;
}
function Member(props: any) {
  const token = getToken();

  const [
    Promote,
    { data: datapromote, loading: loadpromote, error: errorpromote },
  ] = useMutation(PromoteMutation, {
    context: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
    variables: {
      adminName: props.name,
    },
  });
  const [
    Demote,
    { data: datademote, loading: loaddemote, error: errordemote },
  ] = useMutation(DemoteMutation, {
    context: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
    variables: {
      adminName: props.name,
    },
  });
  console.log(loaddemote);
  const [Kick, { data: datakick, loading: loadkick, error: errorkick }] =
    useMutation(kickMutation, {
      context: {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
      variables: {
        memberName: props.name,
      },
    });
  console.log(errordemote);
  console.log(datademote);
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center w-[100%]">
        <div className="flex space-x-2">
          {props.role !== "owner" && (
            <>
              <button className="ml-1 cursor-default">
                <TbLayoutSidebarLeftExpand
                  className={`text-xl   ${
                    props.darker
                      ? "text-[#e2e2e2] hover:text-[#bdbdbd]"
                      : "hover:text-[#5b5b5b]"
                  } ${show ? "rotate-180" : ""} ease-linear duration-200`}
                  onClick={() => {
                    setshow(!show);
                  }}
                />
              </button>
            </>
          )}
          {show && (
            <div
              className={`h-auto p-2 w-auto rounded flex flex-col items-end justify-center space-y-3 md:space-y-2`}
            >
              {props.role !== "admins" && (
                <div
                  onClick={() => {
                    Promote();
                  }}
                  id="animate1"
                  className=" cursor-pointer flex flex-row-reverse items-center hover:opacity-50 active:text-[#464646] md:active:opacity-[1] ease-linear duration-75"
                >
                  <GiArmorUpgrade className="md:ml-2 text-2xl md:text-xl" />
                  <p className="hidden md:block ">??????????</p>
                  {/* when member, only leader */}
                </div>
              )}
              <div
                onClick={() => {
                  Kick();
                }}
                id="animate1"
                className=" cursor-pointer flex flex-row-reverse items-center hover:opacity-50 active:text-[#464646] md:active:opacity-[1] ease-linear duration-75"
              >
                <GiBootKick className="md:ml-2 text-2xl md:text-xl" />
                <p className="hidden md:block ">??????</p>
                {/* when member, leader and admin */}
              </div>
              <div
                onClick={() => {
                  Demote();
                }}
                id="animate1"
                className=" cursor-pointer flex flex-row-reverse items-center hover:opacity-50 active:text-[#464646] md:active:opacity-[1] ease-linear duration-75"
              >
                <GiArmorDowngrade className="md:ml-2 text-2xl md:text-xl" />
                <p className="hidden md:block cursor-pointer">??????</p>
                {/* when admin, only leader */}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row items-center">
          <p
            className={`text-sm sm:text-lg md:text-xl font-semibold text-center md:mt-0 ${
              props.darker ? "text-[#e2e2e2]" : ""
            }`}
          >
            {props.name}
          </p>
          <img
            src={props.img}
            className="h-20 w-20 bg-slate-400 rounded-[40px] m-2 object-cover"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Member;
