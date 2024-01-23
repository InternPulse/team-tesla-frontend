import Navlinks from "./navlinks";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="  pt-4  font-Nunito text-[13px]">
      <div className=" flex">
        <div className=" w-[30%]">
          <img src={logo} alt="logo" className=" w-[60%]" />
        </div>
        <div className=" w-[50%] my-auto">
          <Navlinks />
        </div>
        <div className=" w-[20%] flex justify-between gap-[20px]">
          <button className=" bg-mustard text-white w-[100%] rounded">
            Get Started
          </button>
          <button className=" outline-mustard text-mustard outline-2 outline w-[100%] rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
