import { useState } from "react";

export function FormComponent() {

    //METHOD 1-SINGLE STATE OBJECT (RECOMMEDED)

    //defining empty form box
    const[formData,setFormData]=useState({
        name:"",
        email:""
    })

    //handlign form data dynamically
    function HandleChanges(event){
        const {name, value}=event.target;

        setFormData({
            ...formData,
            [name]:value
        })
        console.log(formData)
    }

    //handling submit changes
    function Handlesubmit(event) {
        event.preventDefault()
    }

    return (
        <>
            <h2>Form Handling in React</h2>

            <div>
                <form onSubmit={Handlesubmit} action="POST">
                    <input
                        type="text"
                        name="name"
                        // when we add value input, we cant type till it becomes dynamic
                        //because this field is a controlled component by react
                        value={formData.name}
                        id="name"
                        placeholder="Enter your name"
                        onChange={HandleChanges} />  {/* this function is handles all changes in the form */}

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        id="email"
                        placeholder="Enter your email"
                        onChange={HandleChanges} />
                    <button type="submit">submit Details</button>
                </form>
            </div>
        </>
    )
}