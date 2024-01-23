// import Button from "../component/Button";
import Pulse from "/Exclude.png";
import { Link } from "react-router-dom";
import eye from "../../assets/eye.svg";
import eyeSlash from "../../assets/eyeSlash.svg";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Center, Input, Stack } from "@chakra-ui/react";

export default function BusinessRegistration() {
  const [passwordType, setpasswordType] = useState("password");

  const togglePasswordView = () => {
    setpasswordType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  const handleSubmit = () => {
    console.log(handleSubmit);
  };

  let data = {
    username: "",
    password: "",
  };

  return (
    <Center h="100vh" flexDir="column" className=" font-Nunito">
      <div className="text-center">
        <img src={Pulse} className="mx-auto my-[10px]" alt="Pulse Logo" />
        <p className=" text-[14px]">Enter your account details</p>
      </div>
      <Formik initialValues={data} onSubmit={handleSubmit}>
        <Form>
          <Stack pt={"20px"} spacing={"15px"}>
            <p className=" text-[14px]">Username</p>
            <div>
              <Field
                as={Input}
                type="name"
                placeholder="Username"
                name="username"
                required
                focusBorderColor="#FFDB58"
                fontSize={"14px"}
              />
            </div>

            <div className="relative">
              <p className=" text-[14px]">Password</p>
              <Field
                as={Input}
                type={passwordType}
                name="password"
                required
                focusBorderColor="#FFDB58"
                fontSize={"14px"}
                width="350px"
              />
              <div className="absolute top-[30px] right-5">
                {passwordType === "password" ? (
                  <img
                    src={eyeSlash}
                    alt="eye"
                    className="w-6 h-6 cursor-pointer"
                    onClick={togglePasswordView}
                  />
                ) : (
                  <img
                    src={eye}
                    alt="eyeSlash"
                    className="w-6 h-6 cursor-pointer"
                    onClick={togglePasswordView}
                  />
                )}
              </div>
            </div>

            <div>
              <button className=" bg-mustard w-[100%] p-[12px] mt-[12px] rounded">
                <Link to="/dashboard/*" className=" text-white">
                  Login
                </Link>
              </button>
            </div>
            <div>
              <p className=" text-center text-[14px]">
                Dont have an account?
                <span className=" text-mustard">
                  <Link to="/onboarding"> Sign Up</Link>
                </span>
              </p>
            </div>
          </Stack>
        </Form>
      </Formik>
    </Center>
  );
}
