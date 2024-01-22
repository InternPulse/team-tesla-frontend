import { useRef, useState } from "react";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Authentication = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    } else {
      // If non-numeric or more than 1 character, clear the input
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }

    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="otp-container min-h-screen flex justify-center items-center ">
      <div>
        <div className="justify-center flex">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="text-center">
          <p className="text-2xl text-slightGray my-[20px]">
            We just sent you an email
          </p>
          <p className=" my-[20px] text-[13px]  text-slightGray">
            Enter the verification code sent to JohnDoe@gmail.com
            <br /> to confirm your email address
          </p>
          <p className=" text-slightGray my-[15px]">Email verification code</p>
        </div>
        <div className="justify-center flex space-x-4 ">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-10 h-10 px-2 text-center border rounded outline  outline-mustard focus:bg-mustard"
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        <div className=" flex justify-center">
          <Link to="/auth/loading">
            <button className="bg-mustard text-white text-center w-96 mt-6 py-4 px-10 rounded-md hover:bg-amber-200">
              Confirm your email
            </button>
          </Link>
        </div>
        <p className=" my-[10px] text-mustard text-center">
          <Link to="#">Didn’t receive the OTP?</Link>
        </p>
      </div>
    </div>
  );
};

export default Authentication;
