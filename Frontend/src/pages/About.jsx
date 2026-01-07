import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assests";

const About = () => {
  return (
    <div className="">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"THIS PROJECT"}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="md:max-w-[450px] w-full aspect-[1029/1046] object-cover" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>VoltCart is a full-stack e-commerce project designed to streamline the way users explore and purchase electronic components. Built with a focus on performance, modular design, and maintainability, the platform emphasizes clear product organization, responsive UI, and a scalable foundation for future backend expansion.</p>
          <p>Since starting the project, I’ve focused on designing a clean, well-structured interface that reflects how engineers and students actually think about components. From organizing products by category and specifications to building a responsive UI, each part of VoltCart is shaped by real-world use rather than generic storefront patterns.</p>
          <b className="text-gray-800">My Mission</b>
          <p>My goal with VoltCart is to combine practical electronics knowledge with modern web development practices. The project serves as both a learning platform and a foundation for future full-stack expansion, emphasizing clarity, performance, and scalability.</p>
        </div>
      </div>
        <div className="text-xl py-4">
          <Title text1={"WHY"} text2={"HIRE ME"}/>
        </div>
         <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Engineering Mindset</b>
            <p className="text-gray-600"> I approach problems with an engineering-first mindset, focusing on clear requirements, structured solutions, and attention to detail. This allows me to build features that are practical, reliable, and easy to maintain.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Practical Software Skills</b>
            <p className="text-gray-600">Through projects like VoltCart, I apply modern frontend tools while designing with scalability and backend integration in mind. Building structured, well-organized systems strengthens my core problem-solving skills and prepares me to adapt quickly to new programming languages and technologies.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Strong Ownership & Initiative</b>
            <p className="text-gray-600">I take full ownership of my work from planning and implementation to iteration and refinement. I’m proactive about learning new technologies, improving designs, and delivering polished results.</p>
          </div>

          

        </div>
  
    </div>
  )
}

export default About