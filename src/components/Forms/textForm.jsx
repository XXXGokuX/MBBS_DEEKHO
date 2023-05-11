
function TextForm({question,placeholder,type}) {
    return ( 
        <>
           <div className="text-form">
                 
            <div className="form-questions mb-4">
                <p className="text-white font-semibold text-xl md:text-3xl tracking-wide leading-7">{question}</p>
            </div>

            <div className="inp-box mb-4">

                <input type={type} placeholder= {placeholder} className="w-full text-sm md:text-base text-white caret-white rounded-md px-2 py-2 md:px-3 md:py-3 bg-transparent outline-none border-[1px] border-white/30 focus-within:border-white placeholder:text-white/30" />

            </div>

            

           </div>

        </>
     );
}

export default TextForm;