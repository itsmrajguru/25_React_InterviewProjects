

/*Confing Folder-->
    here we store all the raw information that is passed somewhere in the project */


export const signUpFormControls = [
  {
    id: "name",
    label: "Name",
    placeholder: "Enter your name",
    componentType: "input",
    type: "text",
    rules: { required: "Name is required" },
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
    rules: { required: "Enter correct email" },
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
    rules: { required: "Password is required", minLength: { value: 4, message: "Password must contain at least 4 characters" } },
  },
];

export const signInFormControls = [
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
    rules: { required: "Enter correct email" },
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
    rules: { required: "Password is required", minLength: { value: 4, message: "Password must contain at least 4 characters" } },
  },
];
