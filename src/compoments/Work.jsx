import React from "react";
import Project from '../assets/newMissLim.png';

function Work (){
    return (
      <div name="work" className="w-full md:h-screen bg-[whitesmoke]">
        <div className="mx-width-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#028a0f] ">Work</p>
            <p className="py-6">This is some of my work.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div style={{backgroundImage: `url(${Project})`}}
             className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div ">

              {/*Hover Effects*/}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold tracking-wider">
                 React js Application
                </span>
                <div className="pt-8 text-center">
                   <a href="https://github.com/davidmoeti8/realmisslim.git">
                     <button className="text-center rounded-lg px-4 px-3 m-2 bg-white font-bold text-lg">Demo</button>
                   </a>
                   <a href="/">
                     <button className="text-center rounded-lg px-4 px-3 m-2 bg-white font-bold text-lg">Code</button>
                   </a>
                </div>
              </div>
            </div>
            <div style={{backgroundImage: `url(${Project})`}}
             className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div ">

              {/*Hover Effects*/}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold tracking-wider">
                 React js Application
                </span>
                <div className="pt-8 text-center">
                   <a href="https://github.com/davidmoeti8/realmisslim.git">
                     <button className="text-center rounded-lg px-4 px-3 m-2 bg-white font-bold text-lg">Demo</button>
                   </a>
                   <a href="/">
                     <button className="text-center rounded-lg px-4 px-3 m-2 bg-white font-bold text-lg">Code</button>
                   </a>
                </div>
              </div>
            </div>
            <div style={{backgroundImage: `url(${Project})`}}
             className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div ">

              {/*Hover Effects*/}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold tracking-wider">
                 React js Application
                </span>
                <div className="pt-8 text-center">
                   <a href="https://github.com/davidmoeti8/realmisslim.git">
                     <button className="text-center rounded-lg px-4 px-3 m-2 bg-white font-bold text-lg">Demo</button>
                   </a>
                   <a href="/">
                     <button className="text-center rounded-lg px-4 px-3 m-2 bg-white font-bold text-lg">Code</button>
                   </a>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    )
}

export default Work;