import React from "react";

function About (){
    return(
        <div name="about" className="w-full h-screen bg-[whitesmoke] text-[#111111]">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-[#028a0f]">
                        About
                    </p>
                </div>
                <div>
                </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                  <div>
                    <p className="sm:text-right text-4xl font-bold">Hello, It is Tshepiso,It's pleasing to have you here, be free and look around.</p>
                  </div>
                  <div>
                    <p>I enjoy watching magic unfold before my eyes whilst building apps.
                        More so building a software that I know will make the lives of people better and much more easy,
                        I do work for anyone raging from individuals, small and large companies. A very
                        teachable and dedicated software Developer is good to have in your hands, and I am without a doubt one.
                    </p>
                  </div>
              </div>
            </div>

        </div>
    )
}

export default About; 