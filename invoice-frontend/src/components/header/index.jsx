import { Link } from "react-router-dom";
import ImgCard from "../../assets/box.png";

const Header = () => {
  return (
    <div className=" flex justify-between pt-[70px] gap-[70px] w-[100%]">
      <div className=" my-[auto] w-[50%] ">
        <h1 className=" text-[55px]">The Heartbeat to your</h1>
        <h3 className=" text-3xl py-[15px] text-slate-500">Invoice</h3>
        <p className=" text-[13px] w-[60%]">
          We are here to ensure you are able to seamlessly create and manage
          your invoices with ease.
        </p>
        <div className=" w-[50%] flex justify-between gap-[20px] pt-[20px]">
          <Link
            to="/onboarding"
            className=" bg-slate-400 text-center text-white w-[100%] rounded py-[10px]"
          >
            Get Started
          </Link>
          <button className=" outline-slate-700 outline-2 outline w-[100%] rounded">
            Watch a Demo
          </button>
        </div>
      </div>
      <div className=" w-[45%]">
        <img src={ImgCard} alt="Card" className=" w-[100%] my-[auto]" />
      </div>
    </div>
  );
};

export default Header;
