import bell from "../../../assets/bell.png";
import settings2 from "../../../assets/settings2.png";
import person from "../../../assets/person.png";
import search from "../../../assets/search.png";
import PaymentCard from "../../../assets/PaymentCard.png";
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
        <div className="flex flex-col md:flex-row justify-between bg-white w-full  md:max-w-[47%] px-4 rounded-md md:min-h-[180px]">
          <div className="md:my-3 leading-5 md:leading-[30px] font-Montserrat text-sm md:text-[13px]">
            <div>
              <p className="text-lg md:text-xl font-semibold text-[#404859] font-montserrat">
                Payments
              </p>
              <p>Invoice Number - 1G23XTA</p>
              <div className="flex flex-col md:flex-row justify-between">
                <p>08/12/2023</p>
                <div>
                  <p className="md:text-[16px] md:px-2 text-[#FFC300]">
                    pending
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between mt-2 md:mt-0">
                <a href="/" className="text-[#FFC300] underline md:mr-4">
                  Generate payment link
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mt-2 md:mt-0">
              <p className="underline cursor-pointer mb-2 md:mb-0 md:mr-4 whitespace-nowrap">
                Prev
              </p>
              <p className="cursor-pointer underline whitespace-nowrap">Next</p>
            </div>
          </div>
          <div className="min-w-[55%] md:max-h-[87%] relative   md:mt-1 md:left-12 flex justify-center md:justify-start">
            <img
              src={PaymentCard}
              className="w-full h-auto sm:w-[72%]"
              alt="Payment Card"
            />
          </div>
        </div>

        <div className="flex bg-white justify-between  p-[10px]  w-[492px] rounded-[10px] h-[180px] ">
          <div>
            <p className="text-[16px] font-semibold font-montserrat text-[#404859]">
              All Invoices
            </p>
            <div className="my-auto w-full md:w-[80%] md:mt-3 relative">
              <img src={Chart} alt="chart" className="w-full h-auto" />
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
          <p className="font-semibold text-[15px] text-[#404859] sm:px-2">
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
