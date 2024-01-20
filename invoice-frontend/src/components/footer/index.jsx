import { Link } from "react-router-dom";

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
    <div className="  w-[100%] mt-[100px] p-[60px]  bg-slate-400 text-white">
      <div className="  flex justify-between  gap-[30px]  max-w-[1100px] m-auto">
        <div className=" w-[25%]">
          {" "}
          <p className=" text-3xl">LOGO</p>
          <p className=" text-[15px]">
            Lorem ipsum dolor sit amet consectetur. Facilisis ipsum gravida amet
            ultrices mauris.{" "}
          </p>
          <div className=" flex">
            <img />
          </div>
        </div>
        <div className=" flex flex-col gap-[10px]">
          <p className=" text-[17px] font-bold">Company</p>
          {Quicklinks.map((data) => (
            <Link key={data.name} to={data.to}>
              <p className=" text-[12px] font-medium">{data.name}</p>
            </Link>
          ))}
        </div>
        <div className=" flex flex-col gap-[10px]">
          <p className=" text-[17px] font-bold">Company</p>
          {Services.map((data) => (
            <Link key={data.name} to={data.to}>
              <p className=" text-[12px] font-medium">{data.name}</p>
            </Link>
          ))}
        </div>
        <div className=" flex flex-col gap-[10px]">
          <p className=" text-[17px] font-bold">Contact</p>
          <div className=" flex flex-col gap-[10px] text-[12px] font-medium">
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
