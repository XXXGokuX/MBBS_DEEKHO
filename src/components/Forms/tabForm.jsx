import { useState } from "react";

function TabForm({question,options}) {

    const [active,setActive]= useState(0);
    return ( 
        <>
            <div className="tab-form">

                <div className="form-questions mb-4">
                    <p className="text-white font-semibold text-xl md:text-3xl tracking-wide leading-7">{question}</p>
                </div>

                <div className="form-options flex flex-wrap gap-3 md:gap-5 mb-8">
                    {options.map((op,index)=> (
                        <div key={index} className={`tab px-3 py-1  md:px-5 text-sm md:text-base cursor-pointer ${active === index ? 'text-white bg-blue-600 font-semibold rounded-full':' text-white/50'}`} 
                        onClick={()=> setActive(index)}>
                            {op}
                        </div>
                    ))}
                </div>

            </div>
        </>
     );
}

export default TabForm;