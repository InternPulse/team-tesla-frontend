import Button from "../component/Button";
import Pulse from "/Exclude.png";
import { Link } from "react-router-dom";
import eye from "../../../assets/eye.svg";
import eyeSlash from "../../../assets/eyeSlash.svg";
import { useState } from "react";

export default function UserRegistration() {
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
        <h1 className="text-slightGray text-[20px] font-Nunito font-[600]">
          Enter your details to set up your Individual account
        </h1>
        <form className="flex flex-col mt-10 text-lighterGray max-w-2xl mx-auto justify-center font-Montserrat">
          <label
            htmlFor="Full name"
            className="text-[16px] text-slightGray font-[500]"
          >
            Full Name
          </label>
          <div className="space-x-5 flex justify-between my-4">
            <input
              type="text"
              placeholder="First name"
              className="border border-borderGray py-3 px-3 rounded-md outline-mustard text-black"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-borderGray py-3 px-3 rounded-md outline-mustard text-black"
            />
          </div>
          <div className="my-4">
            <label
              htmlFor="Full name"
              className="text-[16px] text-slightGray font-[500]"
            >
              Email address
            </label>
            <input
              type="email"
              placeholder="JohnDoe@example.com"
              className="border border-borderGray w-full py-3 px-3 rounded-md outline-mustard my-4"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="Full name"
              className="text-[16px] text-slightGray font-[500]"
            >
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
          <div className="my-3">
            <label
              htmlFor="Full name"
              className="text-[16px] text-slightGray font-[500]"
            >
              Create Individual Url
            </label>
            <input
              type="text"
              placeholder="Johndoe.invoicpulse.com"
              className="border border-borderGray outline-mustard text-black w-full my-4 py-3 px-3 rounded-md"
            />
          </div>
          <div className="mt-4 space-x-3">
            <input type="checkbox" className="border border-mustard" />
            <span className="text-black">
              I accept the{" "}
              <Link to="/term-conditions" className="text-mustard">
                terms and conditions of Invoice Pulse
              </Link>{" "}
            </span>
          </div>
          <Button style="ml-5" text="Create and account" />
        </form>
        <p className="text-slate-600 text-sm mt-3 text-center font-Montserrat font-[400]">
          Already have an account?
          <Link to="/login" className="text-mustard">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
