import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Center, Input, Stack } from "@chakra-ui/react";
import Pulse from "/Exclude.png";
import eye from "../../assets/eye.svg";
import eyeSlash from "../../assets/eyeSlash.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../../features/userSlice";
import Spinner from "../../components/spinner/Spinner";

export default function LoginForm() {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const dispatch = useDispatch();

  const togglePasswordView = () => {
    setPasswordType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://team-tesla-backend-oofiv.ondigitalocean.app/api/user/signin/",
        {
          email: values.username,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);

      dispatch(
        loginSuccess({
          email: values.username,
          token: response.data.access_token,
          loggedIn: true,
        })
      );

      navigate("/dashboard");
    } catch (error) {
      setLoginError(
        error.response.data.message ||
          error.response.data.email ||
          "Login failed"
      );

      dispatch(loginFailure(loginError));
    } finally {
      setLoading(false);
    }
  };

  let data = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <Center h="100vh" flexDir="column" className=" font-Nunito">
      <div className="text-center">
        <img src={Pulse} className="mx-auto my-[10px]" alt="Pulse Logo" />
        <p className=" text-[14px]">Enter your account details</p>
      </div>
      {loginError && (
        <div className="text-red-500 bg-red-100 text-sm mt-2 border border-red-500 p-2 !important">
          {loginError}
        </div>
      )}

      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Stack pt={"20px"} spacing={"15px"}>
            <p className=" text-[14px]">Username</p>
            <div>
              <Field
                as={Input}
                type="name"
                placeholder="Username"
                name="username"
                focusBorderColor="#FFDB58"
                fontSize={"14px"}
                autoComplete="username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="relative">
              <p className=" text-[14px]">Password</p>
              <Field
                as={Input}
                type={passwordType}
                name="password"
                focusBorderColor="#FFDB58"
                fontSize={"14px"}
                width="350px"
                autoComplete="current-password"
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
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <button
                className=" bg-mustard w-[100%] p-[12px] mt-[12px] rounded text-white"
                type="submit"
              >
                {loading ? <Spinner /> : "Login"}
              </button>
            </div>
            <div>
              <p className=" text-center text-[14px]">
                Don't have an account?
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
