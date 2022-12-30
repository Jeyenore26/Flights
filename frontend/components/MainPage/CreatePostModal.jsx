import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Input from "../Inputs/Input";
import { RiArticleLine } from "react-icons/ri";
import GroupInput from "../Inputs/GroupInput";
import ImageInput from "../Inputs/ImageInput";
// import axios from "axios";
const CreatePostModal = ({ setIsOpen }) => {
  function makepost() {
    event?.preventDefault;
    setIsOpen(false);
  }
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(description);
    const data = new FormData();
    data.append("file", file);
    const res = await axios({
      url: "http://localhost:5000/create/post",
      data: {
        body: description,
      },
      file: {
        data,
      },
    });
    setIsOpen(false);
  };
  const [description, setdescription] = useState("");

  return (
    <>
      <div
        className={"darkBG"}
        id="animate31"
        onClick={() => setIsOpen(false)}
      />
      <div className={"centered"} id="animate31">
        <div className={`modal`}>
          <div className={"modalHeader"}>
            <h5 className={"heading cairo_semibold_title"}>انشاء بوست</h5>
          </div>
          <button className={"closeBtn"} onClick={() => setIsOpen(false)}>
            <RiCloseLine className="mb-[-2px]" />
          </button>

          <form onSubmit={handleSubmit}>
            <div className={"modalContent"}>
              <GroupInput
                required
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
                label="معلومات"
                lclassName="text-black text-start mb-[-20px]"
                type={"text"}
              />
              <ImageInput
                required
                onChange={handleFileChange}
                label="صورة البوست"
                lclassName="text-black text-start"
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

export default CreatePostModal;
