import { useState } from "react";

function useMultiForm(allForms) {

    const [currentFormIndex,setCurrentFormIndex]= useState(0)


    function next()
    {
        setCurrentFormIndex(i=> {
            return i >= allForms.length-1 ? i:i+1;
        })
    }

    function back()
    {
        setCurrentFormIndex(i=> {
            return i<=0 ? i : i-1;
        })
    }

    return {
        currentFormIndex,
        next,
        back,
        isFirstForm: currentFormIndex === 0,
        isLastForm: currentFormIndex === allForms.length-1,
        allForms,
        currentForm: allForms[currentFormIndex]

    }
}

export default useMultiForm;