import Arrow from "../../assets/Arrow.png";
import { Data } from "./data";
const Feedback = () => {
  return (
    <div className="  max-w-[1150px] m-auto font-Nunito">
      <div className=" text-center">
        <p className=" text-4xl py-[45px]">
          What <span className=" text-mustard">Invoice Pulse</span> Users Are
          Saying
        </p>
      </div>
      <div className="  flex gap-[60px] ">
        {Data.map((review) => (
          <div className=" mt-[30px] w-[90%]" key={review.id}>
            <div className=" w-[100%]">
              <img src={review.image} alt="profile" />
            </div>
            <div>
              <p className=" text-[19px] font-medium py-[5px]">{review.name}</p>
              <p className=" text-[10px]">{review.location}</p>
              <img src={review.rating} className=" w-[25%] py-[15px]" />
              <p className=" text-[12px]">{review.profilereview}</p>
            </div>
          </div>
        ))}
        <div className=" my-auto w-[10%] bg-[#fff3cc] rounded-[30px] p-[7px]">
          <img src={Arrow} alt="icon" className=" w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
