import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Input from "../Inputs/Input";
import { RiArticleLine } from "react-icons/ri";
import GroupInput from "../Inputs/GroupInput";
import { gql, useMutation } from "@apollo/client";
import { createScheduleMutation } from "../../lib/mutationGql/CreateGql";
import Link from "next/link";
import { NextResponse } from "next/server";
function getToken() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token;
}

const CreateShModal = ({ setIsOpen }, props: any) => {
  const [title, settitle] = useState("");
  const [body, setdescription] = useState("");
  const [place, setplace] = useState("");
  const [time, settime] = useState("");
  const token = getToken();
  const [CreateSH, { data, loading, error }] = useMutation(
    createScheduleMutation,
    {
      context: {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
      variables: {
        createScheduleInput: {
          title: title,
          body: body,
          selectedDate: time,
          place: place,
        },
      },
    }
  );
  if (data) console.log(data);
  if (error) console.log(error);
  //ADD LOADING ANIMATIONS JEY OR MAKI MAKI
  if (loading) return "...loading";

  return (
    <>
      <div
        className={"darkBG"}
        id="animate31"
        onClick={() => setIsOpen(false)}
      />
      <div className={"centered"} id="animate31">
        <div className={"modal"}>
          <div className={"modalHeader"}>
            <h5 className={"heading cairo_semibold_title"}>انشاء معاد</h5>
          </div>
          <button className={"closeBtn"} onClick={() => setIsOpen(false)}>
            <RiCloseLine className="mb-[-2px]" />
          </button>

          <form
            onSubmit={(e) => {
              setTimeout(() => {
                window.location.reload();
                setIsOpen(false);
              }, 10000);
              CreateSH();
            }}
          >
            <div className={"modalContent"}>
              <GroupInput
                onChange={(e) => settitle(e.target.value)}
                required
                label="العنوان"
                min={10}
                max={40}
                lclassName="text-black text-start mb-[-20px]"
                type={"text"}
              />
              <GroupInput
                onChange={(e) => setdescription(e.target.value)}
                required
                label="معلومات"
                min={10}
                max={100}
                lclassName="text-black text-start mb-[-20px]"
                type={"text"}
              />
              <GroupInput
                onChange={(e) => setplace(e.target.value)}
                required
                label="المكان"
                min={10}
                max={30}
                lclassName="text-black text-start mb-[-20px]"
                type={"text"}
              />
              <GroupInput
                onChange={(e) => settime(e.target.value)}
                required
                label="الزمن"
                lclassName="text-black text-start mb-[-20px]"
                type={"datetime-local"}
              />
            </div>
            <div className={"actionsContainer"}>
              <button
                type="submit"
                className={"confirmbtn cairo_regular_title"}
              >
                تاكيد
              </button>
            </div>
            <h6 className={"heading cairo_semibold_title text-red-600"}>
              الاعضاء العاديين لا يستطيعون انشاء مواعيد
            </h6>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateShModal;
