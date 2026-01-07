import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assests";

const About = () => {
  return (
    <div className="">
      <div className="text-x text-centr pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="md:max-w-[450px] w-full min-w-[1100px] aspect-[338/117] object-cover" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p></p>
          <p></p>
        </div>

      </div>
  
    </div>
  )
}

export default About