import bell from "../../../assets/bell.png";
import settings2 from "../../../assets/settings2.png";
import person from "../../../assets/person.png";
import search from "../../../assets/search.png";

export default function Home() {
  return (
    <section className="p-5">
      <div className=" flex justify-between items-center">
        <h1 className="font-Nunito font-[400] text-[30px]">Hello, John!</h1>
        <div className="flex items-center mr-10 relative">
          <input
            type="text"
            placeholder="Search"
            className="mr-24 rounded-full font-Montserrat w-[347px] py-2 px-4"
          />
          <img src={search} alt="" className="absolute right-[275px]" />
          <div className="flex items-center space-x-10">
            <img src={bell} alt="" />
            <img src={settings2} alt="" />
            <img src={person} alt="" />
          </div>
        </div>
      </div>
      <h1 className="mt-5 font-Montserrat font-[600]">Dashboard</h1>
    </section>
  );
}
