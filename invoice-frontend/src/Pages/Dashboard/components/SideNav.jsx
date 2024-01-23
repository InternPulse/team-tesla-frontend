import { Link, useLocation } from "react-router-dom";
import Pulse from "/Exclude.png";
import Navlinks from "../data/Navlinks";
import question from "../../../assets/question.png";

export default function SideNav() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen w-[241px]">
      <nav className="p-6">
        <div className="pb-10">
          <img src={Pulse} alt="Invoice Pulse" />
        </div>
        <div className="flex flex-col pl-3 space-y-10 font-Montserrat font-[600]">
          {Navlinks.map((nav, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 hover:text-yellowShade cursor-pointer"
            >
              <img src={nav.svg} alt="" />
              <Link
                to={nav.url}
                className={`${pathname === nav.url ? "text-yellowShade" : ""}`}
              >
                {nav.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-[420px] p-6 space-x-3 font-Montserrat font-[400]">
          <img src={question} alt="" />
          <Link to="/help">Help</Link>
        </div>
      </nav>
    </div>
  );
}
