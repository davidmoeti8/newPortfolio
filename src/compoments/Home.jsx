import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';

function Home (){
    return(
        <div name="home" className="w-full h-screen bg-[whitesmoke]">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#028a0f]">Hello, My Name Is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#111111]">Tshepiso David Moeti</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#333333]">I'm a FrontEnd Developer</h2>
                <p className="text-[#333333] py-4 max-w-[700px]">I specialize in building and designing responsive Web Applications.
                 I guarantee execeptional digital experience to users of the Web Applications I build.</p>
                 <div>
                  <button className="text-black border-2 border-[#028a0f] px-6 py-3 my-2 flex items-center hover:bg-[#028a0f]"><Link 
      to="work" 
      smooth={true} 
      duration={500} 
    >
      <span className="hover:rotate-90 duration-300"><HiArrowNarrowRight className="ml-3"/>My Work</span>
    </Link>
                  
                  </button>
                   
                 </div>
            </div>
        </div>
    )
}

export default Home;