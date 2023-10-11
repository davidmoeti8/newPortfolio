import React from "react";
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';

function Skills () {
    return(
        <div name="skills" className="w-full h-screen bg-[whitesmoke] text-[#111111]">
          <div className="max-w-[1000px] mx-auto p-4  flex flex-col justify-center  w-full h-full">
           <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#028a0f] ">Experience</p>
            <p className="py-4 ">//These are the tools I usually work with creating a magic.</p>
           </div>
           <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
            <div className="shadow-md shadow-black hover:scale-110 duration-300">
              <img className="w-20 mx-auto" src={HTML} alt="Html logo" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-black hover:scale-110 duration-300">
              <img className="w-20 mx-auto" src={CSS} alt="CSS logo" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-black hover:scale-110 duration-300">
              <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript logo" />
              <p className="my-4">JavaScript</p>
            </div>
            <div className="shadow-md shadow-black hover:scale-110 duration-300">
              <img className="w-20 mx-auto" src={ReactImg} alt="React logo" />
              <p className="my-4">React</p>
            </div>
            <div className="shadow-md shadow-black hover:scale-110 duration-300">
              <img className="w-20 mx-auto" src={Tailwind} alt="Tailswind logo" />
              <p className="my-4">Tailswind</p>
            </div>
            <div className="shadow-md shadow-black hover:scale-110 duration-300">
              <img className="w-20 mx-auto" src={Bootstrap} alt="Bootstrap logo" />
              <p className="my-4">Bootstrap</p>
            </div>
          </div>
          
            </div>
        </div>
    )
}

export default Skills;