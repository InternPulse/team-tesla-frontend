// import Proflie from "../../assets/profile.png";
import { Data } from "./data";
const Feedback = () => {
  return (
    <div className=" mt-[90px]">
      <div className=" text-center">
        <p className=" text-2xl">What Invoice Pulse Users Are Saying</p>
      </div>
      <div className=" grid grid-cols-3">
        {Data.map((review) => (
          <div className="  p-[20px] flex gap-[5px] mt-[30px]" key={review.id}>
            <div className=" w-[100%]">
              <img src={review.image} alt="profile" />
            </div>
            <div>
              <p className=" text-[19px] font-medium py-[5px]">{review.name}</p>
              <p className=" text-[10px]">{review.location}</p>
              <p className=" text-2xl py-[5px]">----</p>
              <p className=" text-[12px]">{review.profilereview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
