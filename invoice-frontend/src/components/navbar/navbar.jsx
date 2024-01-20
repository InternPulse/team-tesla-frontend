import Navlinks from "./navlinks";

const Navbar = () => {
  return (
    <div className="  pt-4">
      <div className=" flex">
        <div className=" w-[30%]">
          <h1>LOGO</h1>
        </div>
        <div className=" w-[50%]">
          <Navlinks />
        </div>
        <div className=" w-[20%] flex justify-between gap-[20px]">
          <button className=" bg-slate-600 text-white w-[100%]">
            Get Started
          </button>
          <button className=" outline-slate-700 outline-1 outline w-[100%]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
