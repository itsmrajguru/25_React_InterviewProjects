import { useState } from "react";
import CommonForm from "../common-form";
import { RegisterFormElements} from "../config/index";

const InitialFormData ={
        email: '',
        password: '',
        mobile:''
    }

function RegisterComponent() {
    const [registerFormData, setRegisterFormData] = useState(InitialFormData)
    
    //Handling The Submit Button
    function SubmitButton(event) {
        event.preventDefault()
        console.log("registerFormData:", registerFormData);
        //resetting the value of registerFormData
        setRegisterFormData(InitialFormData)
    }

    // console.log(registerFormData);

    return (
        <div>
            <h1>Register Page</h1>
            <CommonForm
                formData={registerFormData}       //for storing the email and password values
                setFormData={setRegisterFormData}  // For changing the values dynamically
                formFieldValues={RegisterFormElements}  // Sending the Login form data
                ButtonText={'Register'}  //for Register page
                OnHandleSubmit={SubmitButton}
            />
        </div>
    )
}
export default RegisterComponent;