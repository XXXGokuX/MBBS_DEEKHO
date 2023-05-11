
function MenuForm({question,options}) {


    return ( 
        <>
             <div className="menu-form">
                 
                <div className="form-questions mb-4">
                    <p className="text-white font-semibold text-xl md:text-3xl tracking-wide leading-7">{question}</p>
                </div>

                <div className="from-options custom-select">
                   <select className="outline-none w-full p-1 md:p-2 rounded-sm">
                       {options.map((op,index)=> (
                          <option key={index} value={op}>{op}</option>
                       ))}
                   </select>
                </div>
                   
             </div>      
        </>
     );
}

export default MenuForm;