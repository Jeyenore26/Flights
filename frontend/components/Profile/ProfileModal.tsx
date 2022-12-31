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
  const images = [
    "./avater2.png",

    "./avater4.png",

    "./avater3.png",
    "./avater1.png",

    "./avater6.png",
    "./hegab.png",
  ];
  const [description, setdescription] = useState("");
  const token = getToken();

  console.log(description);
  const [img, setimg] = useState("");
  const [changeimg, { data, loading, error }] = useMutation(
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
      <div className="darkBG cursor-default" id="animate31" />
      <div className="centered cursor-default" id="animate31">
        <div className="modal">
          <div className="modalHeader">
            <h5 className={`heading cairo_semibold_title`}>اختر صورة</h5>
          </div>
          <button
            className="closeBtn"
            disabled={!open}
            onClick={() => setIsOpen(false)}
          >
            <RiCloseLine className="mb-[-2px] mr-10 text-black" />
          </button>

          <form>
            <section
              id="gaolsanimation"
              className="flex justify-center cursor-default"
            >
              <div className="w-[100%] griid">
                {images.map((image) => {
                  return (
                    <>
                      <button
                        onClick={() => {
                          setimg(image);

                          console.log(img);
                        }}
                        className="mx-auto mb-4 rounded-full hover:border-black border-2 active:border-blue-400   "
                      >
                        <img src={image} className="w-32 h-32   rounded-full" />
                      </button>
                    </>
                  );
                })}
              </div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
