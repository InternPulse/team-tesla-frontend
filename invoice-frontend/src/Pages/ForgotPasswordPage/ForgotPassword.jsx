/* eslint-disable react/no-unescaped-entities */
import Pulse from "/Exclude.png";
import Button from "../SignUpPages/component/Button";
export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="mt-10 flex flex-col">
        <div className="flex justify-center">
          <img src={Pulse} alt="Invoice Pulse" className="pb-14 " />
        </div>
        <h1 className="text-slightGray text-[20px] text-center font-Nunito">
          Forgot password?
        </h1>
        <h2 className="mt-10 ml-3 font-Montserrat font-[400]">
          Don’t worry! it happens. Please enter the email address <br />
          associated with your account.
        </h2>
        <form className="flex flex-col mt-10 text-lighterGray max-w-2xl  justify-center font-Montserrat">
          <div className="my-4 ">
            <input
              type="email"
              placeholder="JohnDoe@example.com"
              className="border border-borderGray w-full py-3 px-3 rounded-md text-black outline-mustard my-4"
            />
          </div>
          <Button style="w-full" text="Submit" />
        </form>
      </div>
    </div>
  );
}
