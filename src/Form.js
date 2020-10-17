import React, { useState } from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from "./FormSuccess"
const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? (<FormSignUp submitform={submitForm} />) : (<FormSuccess />)}
        </div>
    );
}

export default Form
