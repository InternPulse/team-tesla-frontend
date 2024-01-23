import { Data } from "../header/data";

const About = () => {
  return (
    <div className="mt-[100px] bg-[#F7F7FC] font-Nunito">
      <div className="max-w-[1150px] m-auto py-[60px]">
        <div className="text-center">
          <p className="text-2xl">
            What<span className="text-mustard"> We </span>Offer
          </p>
        </div>
        <div className="mt-[40px]">
          <div className="text-[#404859] grid grid-cols-2 gap-[25px]">
            {Data.map((data) => (
              <div
                key={data.id}
                className="rounded-[10px] overflow-hidden border-2 border-white bg-white py-[27px] px-[20px] transition duration-300 transform hover:scale-105 "
              >
                <img
                  src={data.image}
                  alt={data.subject}
                  className="w-[10%] h-auto"
                />
                <p className="mt-2 text-[26px] font-semi-bold py-[15px]">
                  {data.subject}
                </p>
                <p className=" text-[12px] ">{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
