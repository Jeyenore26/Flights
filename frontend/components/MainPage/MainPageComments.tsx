import React from "react";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { gql, useMutation } from "@apollo/client";
import { ImImage } from "react-icons/im";
import { addLikeMutation } from "../../lib/mutationGql/CreateGql";

function getToken() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token;
}
function MainPageComments(props: any) {
  const [liked, setLiked] = useState(false);
  const token = getToken();
  console.log(props.id);
  const [AddLike, { data, loading, error }] = useMutation(addLikeMutation, {
    context: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
    variables: {
      postId: props.id,
    },
  });
  return (
    <div>
      <div>
        <div
          className={`rounded flex flex-col items-end origin-right  ${
            props.darker ? "bg-[#242424] text-[#e2e2e2]" : "bg-[#fff]"
          }`}
          id="animate1"
        >
          <div className="flex items-center">
            <p className="text-xl font-semibold mb-1">{props.name} </p>

            <img
              src={props.profImg}
              className="h-20 object-cover w-20 bg-slate-400 rounded-[40px] m-2 "
            ></img>
          </div>
          <div dir="rtl" className="p-4 break-all xs:break-words  sm:text-lg">
            {props.desc}
          </div>

          <div className="flex justify-between items-center w-full">
            <div
              className={`ml-2 flex items-center ${
                props.darker ? "text-white" : "text-black"
              }`}
            >
              <button>
                <AiFillLike
                  className={`text-3xl ease-linear duration-75 ${
                    liked ? "text-[#33ca47]" : "hover:text-[#696969]"
                  }`}
                  onClick={() => {
                    AddLike();
                    setLiked(!liked);
                  }}
                />
              </button>
              <p className="ml-2 text-xl mt-1">{props.like}</p>
            </div>
            <div className="flex space-x-2 m-2">
              <p className="text-xs bg-[#39A059] text-[#e2e2e2] rounded p-1">
                {props.time}
              </p>
              <p className="text-xs bg-[#39A059] text-[#e2e2e2] rounded p-1">
                {props.role}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`border-b-2 my-4 sm:my-0 ${
            props.darker ? "border-[#e2e2e2]" : "border-black"
          } w-[10rem] mx-auto translate-y-[1rem]`}
          id="animate2"
        ></div>
      </div>
    </div>
  );
}

export default MainPageComments;
