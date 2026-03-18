import CommonForm from "@/components/common-form";
import { signInFormControls } from "@/config";
import { callLoginUserApi } from "@/services";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const formData = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  async function handleSubmit(getData) {
    console.log(getData);

    const data = await callLoginUserApi(getData);
    console.log(data, "data");

    if (data?.success) {
      toast.success("Login successful", {
        description: "Welcome back!",
      });
      navigate("/tasks/list");
    } else {
      toast.error("Login failed", {
        description: data?.message || "Invalid credentials",
      });
    }
  }


  return (
    <div>
      <CommonForm
        btnText={"Sign In"}
        handleSubmit={handleSubmit}
        formControls={signInFormControls}
        form={formData}
      />
    </div>
  );
}

export default SignIn;