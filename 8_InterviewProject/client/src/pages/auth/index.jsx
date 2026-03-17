// AuthPage.jsx
import { useState } from "react";
import SignUpComponent from "../../components/auth/sign-up";
import SignInComponent from "../../components/auth/sign-in";

function AuthPage() {
    const [isLoginView, setIsLoginView] = useState(true);

    return (
        <div style={{
            minHeight: "100svh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem 1rem",
            background: "var(--bg)",
        }}>
            <div className="card" style={{
                width: "100%",
                maxWidth: "420px",
                padding: "2.5rem 2rem",
                textAlign: "left",
            }}>
                <h2 style={{ marginBottom: "6px" }}>
                    {isLoginView ? "Welcome back" : "Create an account"}
                </h2>

                {isLoginView ? <SignInComponent /> : <SignUpComponent />}

                <p style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "var(--text)",
                    marginTop: "1.5rem",
                }}>
                    {isLoginView ? "Don't have an account?" : "Already have an account?"}
                    {" "}
                    <button
                        type="button"
                        onClick={() => setIsLoginView(p => !p)}
                        style={{
                            background: "none",
                            border: "none",
                            padding: 0,
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "var(--brand)",
                            cursor: "pointer",
                            textDecoration: "underline",
                            textUnderlineOffset: "3px",
                        }}
                    >
                        {isLoginView ? "Sign up" : "Login"}
                    </button>
                </p>

            </div>
        </div>
    );
}

export default AuthPage;