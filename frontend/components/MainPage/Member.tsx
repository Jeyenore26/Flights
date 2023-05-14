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
  console.log(props.name);
  console.log(props.img);
  return (
    <>
      <div className="flex justify-around items-center w-[100%]">
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
            className="h-20 w-20 bg-white rounded-[40px] m-2 object-cover"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Member;
