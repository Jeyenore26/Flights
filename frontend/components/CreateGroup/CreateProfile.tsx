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
const CreateProfile = (props: any, { setIsOpen }) => {
  const [opened, setopened] = useState(true);
  const images = [
    "./avater2.png",

    "./avater4.png",

    "./avater3.png",
    "https://th.bing.com/th/id/OIP.28fWEEaVP8gJEszigjqGOwHaHT?pid=ImgDet&w=887&h=874&rs=1",

    "./avater6.png",
    "./hegab.png",
  ];
  const token = getToken();

  const [img, setimg] = useState("");
  const [changeimg, { data, loading, error }] = useMutation(
    createPostMutation,
    {
      context: {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
      variables: {},
    }
  );
  console.log(data);
  console.log(props.groupname);
  if (error) console.log(error);
  if (loading) return <div>fff</div>;

  return (
    <>
      {opened && (
        <>
          <div className="darkBG cursor-default" id="animate31" />
          <div className="centered cursor-default" id="animate31">
            <div className="modal">
              <div className="modalHeader">
                <h5 className={`heading cairo_semibold_title`}>اختر صورة</h5>
              </div>

              <div
                onClick={() => {
                  setopened(false);
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
                          <div
                            onClick={() => {
                              setimg(image);
                              changeimg();
                              console.log(img);
                            }}
                            className="mx-auto mb-4 rounded-full hover:border-black border-2 active:border-blue-400   "
                          >
                            <img
                              src={image}
                              className="w-32 h-32   rounded-full"
                            />
                          </div>
                        </>
                      );
                    })}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CreateProfile;
