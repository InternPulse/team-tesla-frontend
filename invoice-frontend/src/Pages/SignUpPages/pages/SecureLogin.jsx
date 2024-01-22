import { useRef, useState } from "react";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Authentication = () => {
  const usernameFromAPI = "John23@gmail.com";
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
    <div className="otp-container min-h-screen flex justify-center ">
      <div className="">
        <div className="justify-center flex my-24">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="text-start">
          <p className="text-[20px] text-slightGray my-[20px] font-Nunito font-[600]">
            We just sent you an email
          </p>
          <p className=" text-[18px] text-start my-10  text-slightGray font-Montserrat font-[400]">
            Enter the verification code sent to {usernameFromAPI}
            <br /> to confirm your email address
          </p>
          <p className=" text-slightGray my-[15px] text-[20px] text-start font-Nunito font-[600] mb-5">
            Email verification code
          </p>
        </div>
        <div className=" flex justify-between mt-10 ">
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
        <div className=" flex justify-center mt-10">
          <Link to="/auth/loading">
            <button className="bg-mustard text-white text-center w-96 mt-6 py-4 px-10 rounded-md cursor-pointer font-Montserrat font-[400]">
              Confirm your email
            </button>
          </Link>
        </div>
        <p className=" mt-5 text-mustard text-center font-Montserrat font-[400]">
          <Link to="#">Didn’t receive the OTP?</Link>
        </p>
      </div>
    </div>
  );
};

export default Authentication;
