import { useState } from "react";
import { collegeImages } from "../../../utils/collegeImage";
import {HiOutlineLocationMarker} from 'react-icons/hi'
 
function Section1() {
    
    const [active,setActive]= useState(0);

    return ( 
        <>           
           <div className="section-1">
             
               <div className="section-container flex flex-col lg:flex-row gap-5">
                  
                {/* COLLEGE-IMAGE-SLIDER */}
                  <div className="flex flex-col gap-5 grow">
                     
                     {/* colleg-big-image */}
                     <div className="flex relative h-[280px] md:h-[400px]">
                          
                         {collegeImages.map((elem,index)=>(
                            <div className={`absolute top-0 left-0 transition-all duration-200 ${active === index ? 'opacity-100':'opacity-0'}`}>
                             <img src={elem.img} alt={`college-img`} key={index} className="rounded-md"/>
                            </div> 
                         ))}

                     </div>
                     {/* college-small-images */}
                     <div className="flex gap-5">
                         
                     {collegeImages.map((elem,index)=>(
                            <div className=" w-[100px] rounded-sm relative cursor-pointer" onClick={()=> setActive(index)}>
                               <img src={elem.img} alt={`college-img`} key={index}  className="rounded-sm"/>
                               <span className={`top-0 left-0 w-full h-full bg-slate-400/80 cursor-pointer ${active === index ? 'hidden':'absolute'}`}></span>

                            </div> 
                     ))}

                     </div>

                  </div>

                {/* COLLEGE-INFO */}
                  <div className="college-info">
                      
                      <div className="college-name">
                        <h1 className="text-white font-bold text-4xl md:text-5xl mb-2 lg:mb-4">Massachusetts Institute of Technology</h1>
                        <p className="text-slate-500 font-semibold text-base lg:text-lg tracking-wide"><HiOutlineLocationMarker className="inline align-baseline"/> Cambridge , USA</p>
                      </div>

                      <div className="college-intro mt-2 lg:mt-6">
                        
                        <p className="text-slate-500 text-xl lg:text-lg">
                        More than 150 years old, Massachusetts Institute of Technology (MIT) is known for its programs in engineering and physical sciences. Getting into MIT is extremely competitive and even undergraduates can pursue their research here. QS has ranked it at the #1 position in its World University Ranking for 11 in a row. Students looking to pursue their higher education in Science, Math, and Technology choose to study at MIT.
                        56 major programmes and 58 minor programmes are offered at the undergraduate level at MIT. Various programs are also offered at the graduate study level as well. Engineering, Physical Sciences, Political Science, Linguistics, Urban Studies, and Philosophy are some of the most popular courses offered by MIT. Some more popular courses offered by MIT are mentioned below.
                        </p>

                      </div>

                  </div>

               </div>

           </div>
        </>
     );
}

export default Section1;