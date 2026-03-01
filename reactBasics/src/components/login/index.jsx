import { useState } from "react";
import CommonForm from "../common-form";
import { LoginFormElements } from "../config/index";

const InitialFormData ={
        email: '',
        password: ''
    }

function LoginComponent() {
    const [loginFormData, setloginFormData] = useState(InitialFormData)
    
    //Handling The Submit Button
    function SubmitButton(event) {
        event.preventDefault()
        console.log("loginFormData:", loginFormData);
        //resetting the value of LoginFormData
        setloginFormData(InitialFormData)
    }
    // console.log(loginFormData);

    return (
        <div>
            <h1>Login Page</h1>
            <CommonForm
                formData={loginFormData}       //for storing the email and password values
                setFormData={setloginFormData}  // For changing the values dynamically
                formFieldValues={LoginFormElements}  // Sending the Login form data
                ButtonText={'Login'}  //for Login page
                OnHandleSubmit={SubmitButton}
            />
        </div>
    )
}
export default LoginComponent;