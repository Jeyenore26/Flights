import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Input from "../Inputs/Input";
import { RiArticleLine } from "react-icons/ri";
import GroupInput from "../Inputs/GroupInput";
import ImageInput from "../Inputs/ImageInput";

const ProfileModal = ({ setIsOpen }, props: any) => {
  function makepost() {
    event?.preventDefault;
    console.log(selectedCv);
    setIsOpen(false);
  }
  const [selectedCv, setSelectedCv] = useState("");
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

          <form
            onSubmit={(e) => {
              event?.preventDefault;
              console.log(selectedCv);
              setIsOpen(false);
            }}
          >
            <div className={"modalContent"}>
              <span dir="rtl" className="flex">
                <GroupInput
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                  label="الاسم"
                  lclassName="text-black text-start mb-[-20px]"
                  value="محمد عمار"
                  type={"text"}
                />
                <GroupInput
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                  label="الرقم"
                  lclassName="text-black text-start mb-[-20px]"
                  value="123475152"
                  type={"text"}
                />
              </span>
              <span className="flex">
                <GroupInput
                  required
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                  label="كلمة السر"
                  value="idk1234"
                  lclassName="text-black text-start mb-[-20px]"
                  type={"text"}
                />
              </span>

              <GroupInput
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
                label="البريد الاكتروني"
                value="idk@gmail.com"
                lclassName="text-black text-start mb-[-20px]"
                type={"text"}
              />
              <ImageInput
                value={selectedCv}
                onChange={(e) => {
                  setSelectedCv(e.target.value);
                }}
                label="صورتك الشخصية"
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

export default ProfileModal;
