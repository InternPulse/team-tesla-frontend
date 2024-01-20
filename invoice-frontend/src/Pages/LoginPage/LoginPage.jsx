/* eslint-disable react/no-unescaped-entities */
import Pulse from "/Exclude.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import eye from "../../assets/eye.svg";
import eyeSlash from "../../assets/eyeSlash.svg";
import Button from "../SignUpPages/component/Button";

export default function LoginPage() {
  const [passwordType, setpasswordType] = useState("password");

  const togglePasswordView = () => {
    setpasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="mt-10 flex flex-col">
        <div className="flex justify-center">
          <img src={Pulse} alt="Invoice Pulse" className="pb-14 " />
        </div>
        <h1 className="text-slightGray text-[20px] text-center">
          Welcome back, Log in to continue
        </h1>
        <form className="flex flex-col mt-10 text-lighterGray max-w-2xl mx-auto justify-center">
          <div className="my-4">
            <label htmlFor="Full name" className="text-[16px] text-slightGray">
              Email address
            </label>
            <input
              type="email"
              placeholder="JohnDoe@example.com"
              className="border border-borderGray w-full py-3 px-3 rounded-md outline-mustard my-4"
            />
          </div>
          <div className="relative">
            <label htmlFor="Full name" className="text-[16px] text-slightGray">
              Choose your password
            </label>
            <input
              type={passwordType}
              className="border border-borderGray text-black w-full  my-4 py-3 px-3 rounded-md outline-mustard "
            />
            <div className="absolute top-[53px] right-5">
              {passwordType == "password" ? (
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

          <Button style="ml-5" text="Login" />
        </form>
        <p className="text-slate-600 text-sm mt-3 text-center ml">
          Don't have an account?
          <Link to="/login" className="text-mustard pl-1">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
