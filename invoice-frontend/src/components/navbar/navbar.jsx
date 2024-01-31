import Navlinks from "./navlinks";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

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
        <div className=" w-[20%] flex justify-between gap-[10px] my-auto">
          <Link to="/onboarding">
            <button className=" bg-mustard text-white w-[100%] rounded py-[10px] px-[30px]">
              Get Started
            </button>
          </Link>
          <Link to="/login">
            <button className=" outline-mustard text-mustard outline-2 outline w-[100%] rounded  py-[10px] px-[30px]">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
