// import Button from "../component/Button";
import Pulse from "/Exclude.png";
import { Link, useNavigate } from "react-router-dom";
import eye from "../../../assets/eye.svg";
import eyeSlash from "../../../assets/eyeSlash.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Center, Input, Stack, Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import axios from "axios";
import * as Yup from "yup";
import {
  businessSignupSuccess,
  businessSignupFailure,
} from "../../../features/userSlice";
import { useState } from "react";

export default function BusinessRegistration() {
  const navigate = useNavigate();
  const [passwordType, setpasswordType] = useState("password");
  const [signUpError, setSignUpError] = useState(null);

  const togglePasswordView = () => {
    setpasswordType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  const dispatch = useDispatch();

  const signUP_URL =
    "https://team-tesla-backend-oofiv.ondigitalocean.app/api/user/signup/";

  const handlesubmit = async (values) => {
    try {
      const response = await axios.post(
        signUP_URL,
        {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch(businessSignupSuccess(response.status));

      navigate("/login");
    } catch (error) {
      console.error("Sign-up error:", error);
      setSignUpError(`Sign-up error: ${error.message || "Unknown error"}`);
      dispatch(businessSignupFailure(signUpError));
    }
  };

  let data = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("Please enter your firstname"),
    last_name: Yup.string().required("Please enter your lastname"),
    email: Yup.string().required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <Center h="100vh" flexDir="column" className=" font-Nunito">
      <div className="text-center">
        <img src={Pulse} className="mx-auto" alt="Pulse Logo" />
        <p>Enter your details to set up your business account</p>
      </div>
      {signUpError && (
        <div className="text-red-500 text-sm mt-2 border border-red-500 p-2 !important">
          {signUpError}
        </div>
      )}
      <Formik
        initialValues={data}
        onSubmit={handlesubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Stack pt={"20px"} spacing={"15px"}>
            <p className=" text-[14px]">Full Name</p>

            <Flex gap={"20px"}>
              <div>
                <Field
                  as={Input}
                  type="first_name"
                  placeholder="First Name"
                  name="first_name"
                  focusBorderColor="#FFDB58"
                  fontSize={"14px"}
                />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <Field
                  as={Input}
                  type="last_name"
                  placeholder="Last Name"
                  name="last_name"
                  focusBorderColor="#FFDB58"
                  fontSize={"14px"}
                />
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </Flex>
            <div>
              <p className=" text-[14px]">Email Address</p>
              <Field
                as={Input}
                type="email"
                placeholder="Email Address"
                name="email"
                focusBorderColor="#FFDB58"
                fontSize={"14px"}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="relative">
              <p className=" text-[14px]">Choose a Password</p>
              <Field
                as={Input}
                type={passwordType}
                name="password"
                focusBorderColor="#FFDB58"
                fontSize={"14px"}
              />
              <div className="absolute top-[33px] right-5">
                {passwordType === "password" ? (
                  <img
                    src={eye}
                    alt="eye"
                    className="w-6 h-6 cursor-pointer"
                    onClick={togglePasswordView}
                  />
                ) : (
                  <img
                    src={eyeSlash}
                    alt="eyeSlash"
                    className="w-6 h-6 cursor-pointer"
                    onClick={togglePasswordView}
                  />
                )}
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <p className=" text-[14px]">Business Name</p>
              <Field
                as={Input}
                type="businessName"
                placeholder="Business Name"
                name="businessName"
                focusBorderColor="#FFDB58"
                fontSize={"14px"}
              />
            </div>
            <div className=" flex gap-[12px]">
              <input type="checkbox" />
              <p className=" text-[14px]">
                I accecpt the{" "}
                <span className=" text-mustard ">
                  <Link to="#">terms and conditions of Invoice Pulse</Link>
                </span>
              </p>
            </div>
            <div>
              <button
                className=" bg-mustard w-[100%] p-[12px] mt-[12px] rounded text-white"
                type="submit"
              >
                Create Account
              </button>
            </div>
            <div>
              <p className=" text-center text-[14px]">
                Already have an account?{" "}
                <span className=" text-mustard">
                  <Link to="/login">Log in here</Link>
                </span>
              </p>
            </div>
          </Stack>
        </Form>
      </Formik>
    </Center>
  );
}
