// import { useState } from "react";
// import SignUpComponent from "../../components/auth/sign-up";
// import SignInComponent from "../../components/auth/sign-in";

// function AuthPage() {
//     const [isLoginView, setLoginView] = useState(true)

//     function handleToggle() {
//         setLoginView(!isLoginView)
//     }
//     return (
//         <div>
//             <div>
//                 { isLoginView ? <SignInComponent /> : <SignUpComponent />}
//             </div>
//             <div>
//                 <button onClick={handleToggle}>
//                     { isLoginView ? "SignUp" : "SignIn"}
//                 </button>
//             </div>
//         </div>
//     );
// }
// export default AuthPage;


import { useState } from "react";
import SignUpComponent from "../../components/auth/sign-up";
import SignInComponent from "../../components/auth/sign-in";
import CommonButtonComponent from "@/components/common-button";

function AuthPage() {
    const [isLoginView, setIsLoginView] = useState(true);

    function handleToggle() {
        setIsLoginView(!isLoginView);
    }

    return (
        <div className="flex flex-auto flex-col min-h-screen h-full">
            <div className="flex h-full flex-col justify-center items-center bg-white">
                <h3 className="text-3xl font-bold">Welcome</h3>
                <div className="mt-4">
                    {isLoginView ? <SignInComponent /> : <SignUpComponent />}
                </div>
                <div className="mt-5">
                    <CommonButtonComponent
                        type={'button'}
                        onClick={handleToggle}
                        disabled={false}
                        buttonText={isLoginView ? "Sign Up" : "Sign In"}
                    />
                    {/* <CommonButtonComponent
                        type={'button'}
                        onClick={handleToggle}
                        disabled={false}
                        buttonText={isLoginView ? "Sign Up" : "Sign In"}
                    /> */}
                </div>
            </div>
        </div>
    );
}

export default AuthPage;