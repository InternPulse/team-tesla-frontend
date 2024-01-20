import Pulse from "/Exclude.png";

export default function BusinessRegistration() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="mt-24 flex flex-col">
        <div className="flex justify-center">
          <img src={Pulse} alt="Invoice Pulse" className="pb-14 " />
        </div>
        <h1 className="text-slightGray text-[20px]">
          Enter your details to set up your business account
        </h1>
        <form className="flex flex-col mt-10 text-lighterGray">
          <label htmlFor="Full name" className="text-[16px] text-slightGray">
            Full Name
          </label>
          <div className="space-x-5">
            <input
              type="text"
              placeholder="First name"
              className="border border-borderGray"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-borderGray"
            />
          </div>
          <label htmlFor="Full name" className="text-[16px] text-slightGray">
            Email address
          </label>
          <div>
            <input
              type="email"
              placeholder="JohnDoe@example.com"
              className="border border-borderGray"
            />
          </div>
          <label htmlFor="Full name" className="text-[16px] text-slightGray">
            Choose your password
          </label>
          <div>
            <input
              type="password"
              className="border border-borderGray text-black"
            />
          </div>
          <label htmlFor="Full name" className="text-[16px] text-slightGray">
            Business Name
          </label>
          <div>
            <input
              type="text"
              placeholder="Team Tesla"
              className="border border-borderGray text-black"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
