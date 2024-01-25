import bell from "../../../assets/bell.png";
import settings2 from "../../../assets/settings2.png";
import person from "../../../assets/person.png";
import search from "../../../assets/search.png";
// import PaymentCard from "../../../assets/PaymentCard.png";
import Chart from "../../../assets/chart.png";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TableComponent from "../components/TableComponent";
import UserData from "../data/UserData";
import searchIcon from "../../../assets/Vector.png";
import Calendar from "../../../assets/Calendar.png";

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
        <h1 className="font-Nunito font-[400] text-[30px]">Payments</h1>
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
              <p className="text-[16px] font-semibold text-[#404859] font-montserrat">
                Payments
              </p>
              <p>Invoice Number - 1G23XTA</p>
              <div className="flex justify-between">
                <p>08/12/2023</p>
                <div>
                  <p>pending</p>
                </div>
              </div>
              <div className="flex justify-between">
                <a href="/" className="text-[#FFC300] underline">
                  Generate payment link
                </a>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="underline cursor-pointer">Prev</p>
              <p className="cursor-pointer underline">Next</p>
            </div>
          </div>
          <div className="w-[50%] relative left-[50px]">
            {/* <img src={PaymentCard} className="w-[82%]" /> */}
          </div>
        </div>
        <div className="flex bg-white justify-between  p-[10px]  w-[492px] rounded-[10px] h-[180px] ">
          <div>
            <p className="text-[16px] font-semibold font-montserrat text-[#404859]">
              All Invoices
            </p>
            <div className="my-auto w-[80%] relative bottom-[20px] ">
              <img src={Chart} alt="chat" className="w-[100%] my-[30px]" />
            </div>
          </div>
          <div className="mr-4">
            <DatePicker
              selected={startDate}
              onChange={handleStartDate}
              dateFormat="MMMM d, yyyy"
              showYearDropdown
              showMonthDropdown
              placeholderText="From:"
              className=" h-[29px] top-178px left-1137px px-2 mb-2  bg-[#fff3cc] text-sm"
            />
            <div className="relative left-40 bottom-7">
              <img src={Calendar} alt="cal" />
            </div>
            <DatePicker
              selected={endDate}
              onChange={handleEndDate}
              dateFormat="MMMM d, yyyy"
              showYearDropdown
              showMonthDropdown
              placeholderText="To:"
              className=" h-[29px] top-178px left-1137px px-2  bg-[#fff3cc] text-sm"
            />
            <div className="relative left-40 bottom-5">
              <img src={Calendar} alt="cal" />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white py-[25px] mt-[20px] rounded-[10px] ">
        <div className=" max-w-[900px]  mx-auto flex justify-between border-b pb-4 ">
          <p className="font-semibold text-[15px] text-[#404859]">
            All Payments
          </p>

          <div className=" flex justify-between shadow-md px-[40px] gap-[15px] rounded-[20px] w-[40%]">
            <input
              type="text"
              placeholder="Search Payments here"
              className=" outline-none text-[12px]"
            />
            <div>
              <img
                src={searchIcon}
                className=" w-[100%] p-2  relative left-10"
              />
            </div>
          </div>

          <div>
            <select className=" bg-[#fff3cc] text-[13px] p-[8px] mr-10">
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
