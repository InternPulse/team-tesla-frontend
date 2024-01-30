// import Button from "../component/Button";
import Pulse from "/Exclude.png";
import { Link } from "react-router-dom";
import eye from "../../../assets/eye.svg";
import eyeSlash from "../../../assets/eyeSlash.svg";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Center, Input, Stack, Flex } from "@chakra-ui/react";

export default function BusinessRegistration() {
  const togglePasswordView = () => {
    setpasswordType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  const SignUp = () => {
    let item = { firstName, lastname, businessname, email, passwordType };
    console.log(item);
  };

  return (
    <Center h="100vh" flexDir="column" className=" font-Nunito">
      <div className="text-center">
        <img src={Pulse} className="mx-auto" alt="Pulse Logo" />
        <p>Enter your details to set up your business account</p>
      </div>
      <Formik>
        <Form>
          <Stack pt={"20px"} spacing={"15px"}>
            <p className=" text-[14px]">Full Name</p>
            <Flex gap={"20px"}>
              <div>
                <Field
                  as={Input}
                  type="name"
                  placeholder="First Name"
                  name="firstname"
                  required
                  focusBorderColor="#FFDB58"
                  fontSize={"14px"}
                />
              </div>
              <div>
                <Field
                  as={Input}
                  type="name"
                  placeholder="Last Name"
                  name="lastname"
                  required
                  focusBorderColor="#FFDB58"
                  fontSize={"14px"}
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
                required
                focusBorderColor="#FFDB58"
                fontSize={"14px"}
              />
            </div>
            <div className="relative">
              <p className=" text-[14px]">Choose a Password</p>
              <Field
                as={Input}
                type={passwordType}
                name="password"
                required
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
            </div>
            <div>
              <p className=" text-[14px]">Business Name</p>
              <Field
                as={Input}
                type="businessName"
                placeholder="Business Name"
                name="businessName"
                required
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
                className=" bg-mustard w-[100%] p-[12px] mt-[12px] rounded"
                onClick={SignUp}
              >
                <Link to="" className=" text-white">
                  Create Account
                </Link>
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
