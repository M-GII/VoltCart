import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assests";
import resumePdf from "../assets/resume.pdf"

const Contact =() => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"ME"}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className="w-full md:max-w-[490px] md:max-h-[490px]   aspect-1/1" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Contact Me</p>
          <p className="text-gray-500">Edmonton, AB, Canada</p>
          <p className="text-gray-500">Email:manrojgill@hotmail.com <br/> Phone:(780) 257-9105</p>
          <p className="text-gray-500">LinkedIn: linkedin.com/in/manrojgill <br/>Github: github.com/M-GII</p>
          <p className="font-semibold text-xl text-gray-600">Opportunities</p>
          <p className="text-gray-500">Open to co-op and internship roles in software, full-stack, and computer engineering.</p>
          <button  onClick={() => window.open(resumePdf, "_blank", "noopener,noreferrer")} className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">View Resume</button>
        </div>

      </div>
  
    </div>
  )
}

export default Contact