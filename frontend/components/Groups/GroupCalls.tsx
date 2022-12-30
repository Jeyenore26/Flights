import React from "react";
import { useMutation } from "@apollo/client";
import { joinGroupMutation } from "../../lib/mutationGql/CreateGql";
function getToken() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token;
}
const GroupCalls = (props: any) => {
  const token = getToken();
  const [JoinGroup, { loading, error, data: Schedules }] = useMutation(
    joinGroupMutation,
    {
      context: {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
      variables: {
        groupName: props.name,
      },
    }
  );
  return (
    <div>
      <div
        dir="rtl"
        className="flex flex-col md:flex-row items-center w-full"
        id="animate32"
      >
        <img
          src={props.img}
          alt=""
          className="w-full md:w-[18rem] h-[20rem] mb-8 md:mb-0 md:h-[16rem] rounded"
        />
        <div className="flex flex-col w-[100%] space-y-8 mr-5">
          <p className="text-2xl"> {props.name}</p>
          <p className="text-lg text-black/70">{props.desc}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-sm">{props.members} </p>
              <div className="border-l-2 border-[black] mx-2 py-2 "></div>
              <p className="text-sm">{props.place}</p>
            </div>
            <div className="">
              <button
                onClick={() => {
                  console.log(props.name, typeof props.name);
                  JoinGroup();
                }}
                className="bg-green-400 confirmbtn p-2 px-4 rounded ml-5 mt-3 text-white"
              >
                المزيد
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCalls;
