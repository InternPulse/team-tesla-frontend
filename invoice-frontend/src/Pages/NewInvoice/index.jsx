import Layout from "../Dashboard/Layout";
import InvoiceCard from "./components/InvoiceCard";
import search from "../../assets/search.png";
import bell from "../../assets/bell.png";
import settings2 from "../../assets/settings2.png";
import person from "../../assets/person.png";
import Calender from "../../assets/CalendarNew.png";

const NewInvoice = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <h1 className="font-Nunito font-[400] text-[30px]">New Invoice</h1>
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
      <InvoiceCard>
        <div className=" font-Montserrat mt-[39px] mb-[43px]">
          <p className=" text-[16px] mb-[8px]">Client Name</p>
          <select className=" border border-solid border-gray-300 w-full h-[64px] p-[16px] rounded text-[14px]">
            <option>selct or add a client</option>
          </select>
        </div>
        <div className=" font-Montserrat mt-[39px] mb-[43px] flex justify-between">
          <div>
            <p className=" text-[16px] mb-[8px]">Issued Date</p>
            <div className=" border border-solid border-gray-300 w-[317px] h-[57px] pl-[40px] pr-[19.8px] rounded">
              <div className=" flex justify-between py-[20px] text-[14px]">
                <p>08/09/2024</p>
                <img src={Calender} className=" w-[20px] h-[21.8px]" />
              </div>
            </div>
          </div>
          <div>
            <p className=" text-[16px] mb-[8px]">Due Date</p>
            <div className=" border border-solid border-gray-300 w-[317px] h-[57px] pl-[40px] pr-[19.8px] rounded">
              <div className=" flex justify-between py-[20px] text-[14px]">
                <p>28/09/2024</p>
                <img src={Calender} className=" w-[20px] h-[21.8px]" />
              </div>
            </div>
          </div>
        </div>
        <div className=" font-Montserrat mt-[39px] mb-[43px]">
          <p className=" text-[16px] mb-[8px]">Add description</p>
          <div className=" border border-solid border-gray-300 w-full h-[64px] p-[16px] rounded text-[14px]">
            <p className=" text-[#40485980]">Purchase </p>
          </div>
        </div>
        <div className=" font-Montserrat mt-[39px] mb-[43px]">
          <p className=" text-[16px] mb-[8px]">Total amount</p>
          <div className=" border border-solid border-gray-300 w-full h-[64px] p-[16px] rounded text-[14px]">
            <p className=" text-[#40485980]">$20,0000</p>
          </div>
        </div>
        <div className=" font-Montserrat mt-[39px] mb-[43px]">
          <p className=" text-[16px] mb-[8px]">Customer Note</p>
          <div className=" border border-solid border-gray-300 w-full h-[64px] p-[16px] rounded text-[14px]">
            <p className=" text-[#40485980]">Purchase </p>
          </div>
        </div>
        <div className=" flex gap-[40px]">
          <button className=" border-mustard border border-solid rounded py-[20px] px-[40px]">
            Save as draft
          </button>
          <button
            className=" bg-mustard text-white rounded  py-[20px] px-[40px]"
            style={{}}
          >
            Download pdf
          </button>
        </div>
      </InvoiceCard>
    </Layout>
  );
};

export default NewInvoice;
