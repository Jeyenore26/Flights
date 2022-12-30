import { useQuery } from "@apollo/client";
import React from "react";
import { BiArrowToLeft } from "react-icons/bi";
import { BsArrow90DegLeft } from "react-icons/bs";
import { MdGroup } from "react-icons/md";
import { groupsQuery } from "../../lib/queryGql/groupsQuery";
import GroupCalls from "./GroupCalls";
import axios from "axios";
import { GetServerSideProps } from "next";

export default function Group(props: any) {
  const { data, error, loading } = useQuery(groupsQuery);
  console.log(data);
  return (
    <div className="h-screen cairo_regular_title">
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex items-center" id="animate31">
          <MdGroup className="text-3xl mr-2" />

          <p className="text-2xl"> المجموعات</p>
          <a href="/mainpage" className="absolute top-0 left-0 m-5 text-2xl">
            <BiArrowToLeft className=" hover:text-[#535353] active:hover:text-[#979797]" />
          </a>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="rounded-lg flex flex-col gap-[5rem] md:gap-10 md:items-center w-full md:w-[90%] lg:w-[80%] 2xl:w-[60%] my-10 p-3 bg-[#fff]">
            <GroupCalls
              name="الكتاكيت الارضية"
              desc="عبارات و كلام عن الدجاجة من اقتباسات و كلمات المشاهير و الحكماء قمنا
            بجمعها بعناية . تحتوي الصفحة على 36 حكمة و قول مأثور عن الدجاجة..."
              img="https://media.discordapp.net/attachments/540003423106367492/1057110864995569774/941947bfabcdbcc2.jpg"
              members="50k عضو"
              place="مصر - جنوب جنوب افريقيا"
            />
            <GroupCalls
              name="الكتاكيت الارضية"
              desc="عبارات و كلام عن الدجاجة من اقتباسات و كلمات المشاهير و الحكماء قمنا
          بجمعها بعناية . تحتوي الصفحة على 36 حكمة و قول مأثور عن الدجاجة..."
              img="https://media.discordapp.net/attachments/540003423106367492/1057110864995569774/941947bfabcdbcc2.jpg"
              members="50k عضو"
              place="مصر - جنوب جنوب افريقيا"
            />
            <GroupCalls
              name="الكتاكيت الارضية"
              desc="عبارات و كلام عن الدجاجة من اقتباسات و كلمات المشاهير و الحكماء قمنا
        بجمعها بعناية . تحتوي الصفحة على 36 حكمة و قول مأثور عن الدجاجة..."
              img="https://media.discordapp.net/attachments/540003423106367492/1057110864995569774/941947bfabcdbcc2.jpg"
              members="50k عضو"
              place="مصر - جنوب جنوب افريقيا"
            />
            <GroupCalls
              name="الكتاكيت الارضية"
              desc="عبارات و كلام عن الدجاجة من اقتباسات و كلمات المشاهير و الحكماء قمنا
      بجمعها بعناية . تحتوي الصفحة على 36 حكمة و قول مأثور عن الدجاجة..."
              img="https://media.discordapp.net/attachments/540003423106367492/1057110864995569774/941947bfabcdbcc2.jpg"
              members="50k عضو"
              place="مصر - جنوب جنوب افريقيا"
            />
            <GroupCalls
              name="الكتاكيت الارضية"
              desc="عبارات و كلام عن الدجاجة من اقتباسات و كلمات المشاهير و الحكماء قمنا
    بجمعها بعناية . تحتوي الصفحة على 36 حكمة و قول مأثور عن الدجاجة..."
              img="https://media.discordapp.net/attachments/540003423106367492/1057110864995569774/941947bfabcdbcc2.jpg"
              members="50k عضو"
              place="مصر - جنوب جنوب افريقيا"
            />
            <GroupCalls
              name="الكتاكيت الارضية"
              desc="عبارات و كلام عن الدجاجة من اقتباسات و كلمات المشاهير و الحكماء قمنا
  بجمعها بعناية . تحتوي الصفحة على 36 حكمة و قول مأثور عن الدجاجة..."
              img="https://media.discordapp.net/attachments/540003423106367492/1057110864995569774/941947bfabcdbcc2.jpg"
              members="50k عضو"
              place="مصر - جنوب جنوب افريقيا"
            />
            <GroupCalls
              name="الكتاكيت الارضية"
              desc="عبارات و كلام عن الدجاجة من اقتباسات و كلمات المشاهير و الحكماء قمنا
بجمعها بعناية . تحتوي الصفحة على 36 حكمة و قول مأثور عن الدجاجة..."
              img="https://media.discordapp.net/attachments/540003423106367492/1057110864995569774/941947bfabcdbcc2.jpg"
              members="50k عضو"
              place="مصر - جنوب جنوب افريقيا"
            />
            <GroupCalls
              name="الكتاكيت الارضية"
              desc="عبارات و كلام عن الدجاجة من اقتباسات و كلمات المشاهير و الحكماء قمنا
            بجمعها بعناية . تحتوي الصفحة على 36 حكمة و قول مأثور عن الدجاجة..."
              img="https://media.discordapp.net/attachments/540003423106367492/1057110864995569774/941947bfabcdbcc2.jpg"
              members="50k عضو"
              place="مصر - جنوب جنوب افريقيا"
            />
            <GroupCalls
              name="الكتاكيت الارضية"
              desc="عبارات و كلام عن الدجاجة من اقتباسات و كلمات المشاهير و الحكماء قمنا
          بجمعها بعناية . تحتوي الصفحة على 36 حكمة و قول مأثور عن الدجاجة..."
              img="https://media.discordapp.net/attachments/540003423106367492/1057110864995569774/941947bfabcdbcc2.jpg"
              members="50k عضو"
              place="مصر - جنوب جنوب افريقيا"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
