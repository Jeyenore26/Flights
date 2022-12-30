import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Input from "../Inputs/Input";
import { RiArticleLine } from "react-icons/ri";
import GroupInput from "../Inputs/GroupInput";
import ImageInput from "../Inputs/ImageInput";
import { gql, useMutation } from "@apollo/client";
import { createPostMutation } from "../../lib/mutationGql/CreateGql";

function getToken() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token;
}
const ProfileModal = ({ setIsOpen }) => {
  const [description, setdescription] = useState("");
  const token = getToken();
  console.log(description);
  const [handleSubmit, { data, loading, error }] = useMutation(
    createPostMutation,
    {
      context: {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
      variables: {
        body: description,
      },
    }
  );
  console.log(data);
  if (error) console.log(error);
  if (loading) return <div>fff</div>;

  return (
    <>
      <div className="darkBG" id="animate31" onClick={() => setIsOpen(false)} />
      <div className="centered" id="animate31">
        <div className="modal">
          <div className="modalHeader">
            <h5 className={`heading cairo_semibold_title`}>انشاء بوست</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine className="mb-[-2px]" />
          </button>

          <form
            onSubmit={(e) => {
              handleSubmit();
              setIsOpen(false);
            }}
          >
            <div className="modalContent">
              <GroupInput
                required
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
                label="معلومات"
                lclassName="text-black text-start mb-[-20px]"
                type={"text"}
              />
            </div>
            <div className="actionsContainer">
              <button
                onClick={() => {
                  window.location.reload();
                }}
                type="submit"
                className={`confirmbtn cairo_regular_title`}
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
