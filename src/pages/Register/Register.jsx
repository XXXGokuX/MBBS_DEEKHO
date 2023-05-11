import { useNavigate } from "react-router";
import useMultiForm from "../../components/Forms/useMultiForm";
import {FaArrowRight} from "react-icons/fa"
import TabForm from "../../components/Forms/tabForm";
import MenuForm from "../../components/Forms/menuForm";
import TextForm from "../../components/Forms/textForm";

function Register() {

    const allForms=
    [
        <TabForm question="Are You Neet Qualified ?" options={["Yes","No"]}/>,
        <MenuForm question="Preferance Country ?" options={["India","USA","UK","Australia","France","Germany"]}/> ,
        <TextForm question="What is Your Email ?" placeholder='Email' type='email'/>,
        <TabForm question="Year of NEET examination ?" options={['2021','2022','2023']}/>,
        <MenuForm question="Estimated Budget ?" options={['Max 10 Lakh','Max 20 Lakh','Max 30 Lakh','Max 40 Lakh','50 Lakh+']}/>,
        <TextForm question="Enter Your Password ?" placeholder='Password' type='password' />,
        <TabForm question= "Need Education Loan ?" options={['Yes','No']}/>,
        
        
    ]

    const {currentForm,currentFormIndex,next,back,isFirstForm,isLastForm}= useMultiForm(allForms);

    const navigate= useNavigate()
    return ( 
        <>
            <div className="w-full h-screen bg-black/80 flex justify-center items-center">
                
                <div className="question-forms md:w-auto w-full">

                    <div className="form relative bg-slate-500/30 pt-14 pb-10 px-8 md:pt-24 md:pb-14 md:px-10 rounded-md">
                        
                        {/* ACTIVE-FORM-TAB */}
                        <span className="bg-sky-500 text-white text-sm absolute right-3 md:right-4 top-2 rounded-full px-3 py-1">{currentFormIndex+1}/{allForms.length}</span>

                        {currentForm}
                        
                        <div className="buttons flex justify-end gap-5 md:gap-10 items-baseline mt-4">


                        {!isFirstForm && <button type="button" className="bg-sky-500 text-white font-semibold rounded-full px-7 py-1 md:px-10 md:py-2 mt-10 scale-100 active:scale-75 transition-all hover:bg-sky-700"
                        onClick={()=> back()}>Back</button>}
                        <button type="button" className="text-white/60 hover:text-white text-base  md:text-lg group font-semibold transition-all ease-linear"
                        onClick={()=> { isLastForm ?  navigate('/login') : next()}}>
                            {isLastForm ? "Finish":"Next"} <FaArrowRight className="text-white text-xl -translate-x-[100%] opacity-0 group-hover:opacity-100 inline  group-hover:translate-x-0 transition-all ease-linear"/>
                        </button> 

                        </div>

                     </div>
                    

                </div>

            </div>
        </>
     );
}

export default Register;