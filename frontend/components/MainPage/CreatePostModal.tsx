import React from "react";
import { RiCloseLine } from "react-icons/ri";
import Input from "../Inputs/Input";
import { RiArticleLine } from "react-icons/ri";
import GroupInput from "../Inputs/GroupInput";


const CreatePostModal = ({ setIsOpen }) => {
  return (
    <>
     <div className={'darkBG'} id ='animate31' onClick={() => setIsOpen(false)} />
      <div className={'centered'} id='animate31'>
        <div className={'modal'}>
          <div className={'modalHeader'}>
            <h5 className={'heading cairo_semibold_title'}><RiArticleLine className="w-5 h-5 mt-[-5px]"/>انشاء بوست</h5>
          </div>
          <button className={'closeBtn'} onClick={() => setIsOpen(false)}>
            <RiCloseLine className="mb-[-2px]" />
          </button>
          <div className={'modalContent'}>
            <GroupInput label="العنوان" lclassName="text-black text-start mb-[-20px]" type={'text'} />
            <GroupInput label="معلومات" lclassName="text-black text-start mb-[-20px]" type={'text'} />
           
          </div>
          <div className={'modalActions'}>
            <div className={'actionsContainer'}>
              <button className={'confirmbtn cairo_regular_title'} onClick={() => setIsOpen(false)}>
                تاكيد
              </button>
            </div>
          </div>
        </div>
      </div>
    
  </>
  )
};

export default CreatePostModal;