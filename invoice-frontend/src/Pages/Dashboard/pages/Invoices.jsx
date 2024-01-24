import bell from "../../../assets/bell.png";
import settings2 from "../../../assets/settings2.png";
import person from "../../../assets/person.png";
import search from "../../../assets/search.png";
import lady from "../../../assets/lady.png";
import Chart from "../../../assets/chart.png";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TableComponent from "../components/TableComponent";
import UserData from "../data/UserData";
import searchIcon from "../../../assets/Vector.png";
import plus from "../../../assets/plus.png";
import { Link } from "react-router-dom";

export default function Invoices() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDate = (date) => {
    setStartDate(date);
  };

  const handleEndDate = (date) => {
    setEndDate(date);
  };

  return (
    <section className="p-5 font-Montserrat">
      <div className="flex justify-between items-center">
        <h1 className="font-Nunito font-[400] text-[30px]">Hello, John!</h1>
        <div className="flex items-center mr-10 relative">
          <input
            type="text"
            placeholder="Search"
            className="mr-24 rounded-full w-[347px] py-2 px-4"
          />
          <img src={search} alt="" className="absolute right-[275px]" />
          <div className="flex items-center space-x-10">
            <img src={bell} alt="" />
            <img src={settings2} alt="" />
            <img src={person} alt="" />
          </div>
        </div>
      </div>
      <div className="flex gap-[30px] justify-between mt-[30px]">
        <div className="flex justify-between bg-white w-[50%] px-[15px] rounded-[10px] h-[180px] ">
          <div className="my-auto leading-[30px] font-Montserrat text-[13px]">
            <div>
              <p className="text-[19px] font-semibold">Recent Invoice</p>
              <p>Invoice Number - 1G23XTA</p>
              <div className="flex justify-between">
                <p>08/12/2023</p>
                <div>
                  <p>pending</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p>$ 40,000</p>
                <p className="underline">Details</p>
                <p className="underline">Update</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="underline">Prev</p>
              <p>Next</p>
            </div>
          </div>
          <div className="w-[50%] relative bottom-[38px]">
            <img src={lady} className="w-[80%]" />
          </div>
        </div>
        <div className="flex bg-white justify-between  p-[10px] w-[50%] rounded-[10px] h-[180px] ">
          <div>
            <p>All Invoices</p>
            <div className="my-auto w-[80%] relative bottom-[20px] ">
              <img src={Chart} alt="chat" className="w-[100%] my-[30px]" />
            </div>
          </div>
          <div>
            <p className=" pb-[12px] font-semibold text-[12px]">
              Select Invoice range
            </p>
            <DatePicker
              selected={startDate}
              onChange={handleStartDate}
              dateFormat="MMMM d, yyyy"
              showYearDropdown
              showMonthDropdown
              placeholderText="From"
              className="mb-[10px]  outline-2 outline outline-black rounded px-[10px] text-[13px]"
            />
            <DatePicker
              selected={endDate}
              onChange={handleEndDate}
              dateFormat="MMMM d, yyyy"
              showYearDropdown
              showMonthDropdown
              placeholderText="To"
              className="mb-[10px]  outline-2 outline outline-black rounded px-[10px] text-[13px]"
            />
          </div>
        </div>
      </div>
      <div className=" bg-white py-[25px] mt-[20px] rounded-[10px]">
        <div className=" max-w-[900px] mx-auto flex justify-between  ">
          <div className="  w-[25%]">
            <p>All Invoices</p>
          </div>
          <div className=" flex justify-between shadow-md px-[40px] gap-[15px] rounded-[20px] w-[40%]">
            <input
              type="text"
              placeholder="search invoice"
              className=" outline-none text-[12px]"
            />
            <div>
              <img src={searchIcon} className=" w-[100%] pt-[3px] " />
            </div>
          </div>
          <Link to="/createinvoice">
            <button className=" flex justify-around bg-mustard rounded-[5px] py-[5px] px-[3px]">
              <p className=" my-auto text-[12px] text-white font-semibold">
                New Invoice
              </p>
              <div className=" w-[16%]">
                <img src={plus} className=" w-[100%]" />
              </div>{" "}
            </button>
          </Link>
          <div>
            <select className=" bg-[#fff3cc] text-[13px] p-[5px]">
              <option>Filter</option>
              <option>Filter</option>
              <option>Filter</option>
            </select>
          </div>
        </div>
        <TableComponent data={UserData} />
      </div>
    </section>
  );
}
