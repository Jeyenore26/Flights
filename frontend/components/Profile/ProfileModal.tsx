import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Input from "../Inputs/Input";
import { RiArticleLine } from "react-icons/ri";
import GroupInput from "../Inputs/GroupInput";
import ImageInput from "../Inputs/ImageInput";
import { gql, useMutation } from "@apollo/client";
import { addProfileImageMutation } from "../../lib/mutationGql/CreateGql";

function getToken() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token;
}
const ProfileModal = ({ setIsOpen }) => {
  const images = [
    "https://th.bing.com/th/id/OIP.28fWEEaVP8gJEszigjqGOwHaHT?pid=ImgDet&w=887&h=874&rs=1",

    "https://th.bing.com/th/id/R.1ffbff14c120b1a9f5e399aafb274c60?rik=W8wv6qitunQd1g&pid=ImgRaw&r=0",

    "https://th.bing.com/th/id/OIP.28fWEEaVP8gJEszigjqGOwHaHT?pid=ImgDet&w=887&h=874&rs=1",
    "https://th.bing.com/th/id/OIP.28fWEEaVP8gJEszigjqGOwHaHT?pid=ImgDet&w=887&h=874&rs=1",

    "https://th.bing.com/th/id/OIP.28fWEEaVP8gJEszigjqGOwHaHT?pid=ImgDet&w=887&h=874&rs=1",
    "https://th.bing.com/th/id/OIP.28fWEEaVP8gJEszigjqGOwHaHT?pid=ImgDet&w=887&h=874&rs=1",
  ];
  const [description, setdescription] = useState("");
  const token = getToken();

  console.log(description);
  const [img, setimg] = useState("");
  const [changeimg, { data, loading, error }] = useMutation(
    addProfileImageMutation,
    {
      context: {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
      variables: {
        imageLink: img,
      },
    }
  );
  console.log(data);
  if (error) console.log("gay");

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

          <form
            onSubmit={() => {
              console.log(img);

              changeimg();
            }}
          >
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
