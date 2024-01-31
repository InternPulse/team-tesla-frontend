import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import facebook from "../../assets/ic_baseline-facebook.png";
import whatsapp from "../../assets/ic_baseline-whatsapp.png";
import instagram from "../../assets/mdi_instagram.png";
import twitter from "../../assets/mdi_twitter.png";

const Footer = () => {
  const Quicklinks = [
    {
      name: "Home",
      to: "#",
    },
    {
      name: "About",
      to: "#",
    },
    {
      name: "Agents",
      to: "#",
    },
    {
      name: "Blog",
      to: "#",
    },
    {
      name: "Contact",
      to: "#",
    },
  ];
  const Services = [
    {
      name: "Terms and condition",
      to: "#",
    },
    {
      name: "Privacy",
      to: "#",
    },
    {
      name: "Contact us",
      to: "#",
    },
    {
      name: "Blogs/Articles",
      to: "#",
    },
  ];

  return (
    <div className=" bg-black">
      <div className=" flex justify-between w-[100%] mt-[100px]  gap-[30px] max-w-[1150px] m-auto py-[50px]">
        <div className=" w-[25%]">
          {" "}
          <img src={Logo} alt="logo" />
          <p className=" text-[13px] py-[20px] text-white font-light">
            Lorem ipsum dolor sit amet consectetur. Facilisis ipsum gravida amet
            ultrices mauris.{" "}
          </p>
          <div className=" flex justify-between w-[10%] gap-[10px]">
            <img src={whatsapp} className="" />
            <img src={facebook} />
            <img src={twitter} />
            <img src={instagram} />
          </div>
          <div className=" flex">
            <img />
          </div>
        </div>
        <div className=" flex flex-col gap-[10px]">
          <p className=" text-[17px] font-bold text-white">Quicklinks</p>
          {Quicklinks.map((data) => (
            <Link key={data.name} to={data.to}>
              <p className=" text-[12px] font-light text-white">{data.name}</p>
            </Link>
          ))}
        </div>
        <div className=" flex flex-col gap-[10px]">
          <p className=" text-[17px] font-bold text-white">Services</p>
          {Services.map((data) => (
            <Link key={data.name} to={data.to}>
              <p className=" text-[12px] font-light text-white">{data.name}</p>
            </Link>
          ))}
        </div>
        <div className=" flex flex-col gap-[10px]">
          <p className=" text-[17px] font-bold text-white">Contact</p>
          <div className=" flex flex-col gap-[10px] text-[12px] font-light text-white">
            <p>16,Ikeja,Lagos State</p>
            <p>+32453658562</p>
            <p>Smartbiz40@gmail.com</p>
            <p>2(444) 233-4643</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
