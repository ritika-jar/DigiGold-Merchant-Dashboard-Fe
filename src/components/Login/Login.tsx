import { getLoginInfo } from "@/api/auth";
import { Button, Input } from "antd";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import * as Yup from "yup";

export default function Login() {
  const emailRegEx = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const { mutate: mgetLoginInfo } = useMutation(getLoginInfo, {
    onSuccess: (data) => {
      console.log("purchase order data", data);
    },
    onError: (error) => {},
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: function (values) {
      if (values) {
        let payload = {};
        payload = {
          username: values.email,
          password: values.password,
        };
        mgetLoginInfo(payload);
      }
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is Required")
        .matches(emailRegEx, "Enter Valid email"),
      password: Yup.string().required("Password Number is Required"),
    }),
  });

  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex justify-center items-center w-[50%] bg-[#ffffff]">
        <div className="w-[60%] flex flex-col gap-3">
          <p className="text-[#5F38CD] text-3xl font-bold">Login to Account</p>
          <p className="text-[#4D4E50] text-base font-semibold">
            Please enter your email and password to continue{" "}
          </p>

          <form
            className="flex flex-col gap-2 min-w-[90%] text-[#797A7C] text-sm"
            onSubmit={formik.handleSubmit}
          >
            <label htmlFor="">Email address: </label>
            <Input className="h-[38px]" />
            <label htmlFor="">Password: </label>
            <Input className="h-[38px]" />
            <Button className="h-[32px] my-6 bg-[#5F38CD] hover:bg-[#5F38CD] text-white">
              Sign In
            </Button>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center w-[50%] bg-[#5F38CD] ">
        <p className="text-white text-4xl font-bold">Welcome to DigiGold</p>
      </div>
    </div>
  );
}
