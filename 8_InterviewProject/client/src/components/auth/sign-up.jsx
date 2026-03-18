import CommonForm from "@/components/common-form";
import { signUpFormControls } from "@/config";
import { callRegisterUserApi } from "@/services";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const formData = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  async function handleSubmit(getData) {
    const data = await callRegisterUserApi(getData);

    console.log(data, "data");

    if (data?.success) {
      toast.success("User register successful", {
        description: "Welcome to the project",
      });
      navigate("/tasks/list");
    } else {
      toast.error("Error", {
        description: data?.message || "Some error occured",
      });
    }
  }


  return (
    <div>
      <CommonForm
        form={formData}
        handleSubmit={handleSubmit}
        formControls={signUpFormControls}
        btnText={"Sign Up"}
      />
    </div>
  );
}

export default SignUp;