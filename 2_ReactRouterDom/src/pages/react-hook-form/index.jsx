import { useForm } from "react-hook-form";

function ReactHookFormExample() {

    //importing ReactHookFrom logic...
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset}
        = useForm()

    function onSubmitForm(Formdata) {
        console.log(Formdata);

        //reset the Form
        reset()
    }
    return (
        <div>
            <h1>React-Hook-Form</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input {...register('email', {
                        required: true,
                        minLength: 6
                    })}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                    />
                    {
                        errors.email && errors.email.type === "required"
                            ? <p style={{ color: "aqua" }}>Email is Required</p>
                            : null
                    }
                </div>
                <div>
                    <label htmlFor="email">Password :</label>
                    <input {...register('password', {
                        required: true,
                        minLength: 8
                    })}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Your Password"
                    />
                    {
                        errors.password && errors.password.type === "required"
                            ? <p style={{ color: "aqua" }}>password is Required</p>
                            : null
                    }
                    {
                        errors.password && errors.password.type === "minLength"
                            ? <p style={{ color: "aqua" }}>Password must have atleast 8 chracters</p>
                            : null
                    }
                </div>
                <button type="Submit">Submit</button>
            </form>
        </div>
    );
}

export default ReactHookFormExample;