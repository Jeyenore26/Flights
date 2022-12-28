import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Input from "../Inputs/Input";
import { RiArticleLine } from "react-icons/ri";
import GroupInput from "../Inputs/GroupInput";
import ImageInput from "../Inputs/ImageInput";

const CreateShModal = ({ setIsOpen }) => {
  function makepost() {
    event?.preventDefault;
    console.log(title);
    setIsOpen(false);
  }
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [place, setplace] = useState("");
  const [time, settime] = useState("");

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
            <h5 className={"heading cairo_semibold_title"}>انشاء بوست</h5>
          </div>
          <button className={"closeBtn"} onClick={() => setIsOpen(false)}>
            <RiCloseLine className="mb-[-2px]" />
          </button>

          <form
            onSubmit={(e) => {
              event?.preventDefault;
              console.log(title);
              console.log(description);
              console.log(place);
              console.log(time);

              setIsOpen(false);
            }}
          >
            <div className={"modalContent"}>
              <GroupInput
                onChange={(e) => settitle(e.target.value)}
                required
                label="العنوان"
                lclassName="text-black text-start mb-[-20px]"
                type={"text"}
              />
              <GroupInput
                onChange={(e) => setdescription(e.target.value)}
                required
                label="معلومات"
                lclassName="text-black text-start mb-[-20px]"
                type={"text"}
              />
              <GroupInput
                onChange={(e) => setplace(e.target.value)}
                required
                label="المكان"
                lclassName="text-black text-start mb-[-20px]"
                type={"text"}
              />
              <GroupInput
                onChange={(e) => settime(e.target.value)}
                required
                label="الزمن"
                lclassName="text-black text-start mb-[-20px]"
                type={"text"}
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
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateShModal;
