import Proflie from "../../assets/profile.png";

const Feedback = () => {
  return (
    <div className=" mt-[100px]">
      <div className=" text-center">
        <p className=" text-2xl">What Invoice Pulse Users Are Saying</p>
      </div>
      <div className=" grid grid-cols-3 gap-[50px] mt-[40px]">
        <div className="  p-[20px] flex gap-[10px]">
          <div className=" w-[100%]">
            <img src={Proflie} alt="profile" />
          </div>
          <div>
            <p className=" text-[19px] font-medium py-[5px]">James John</p>
            <p className=" text-[10px]">Lagos</p>
            <p className=" text-2xl py-[5px]">----</p>
            <p className=" text-[12px]">
              Lorem ipsum dolor sit amet consectetur. Ac adipiscing porta amet
              in. Nulla nunc tincidunt cursus et est id faucibus. Quam urna
              dignissim ut sed aenean bibendum
            </p>
          </div>
        </div>
        <div className="  p-[20px] flex gap-[10px]">
          <div className=" w-[100%]">
            <img src={Proflie} alt="profile" />
          </div>
          <div>
            <p className=" text-[19px] font-medium py-[5px]">James John</p>
            <p className=" text-[10px]">Lagos</p>
            <p className=" text-2xl py-[5px]">----</p>
            <p className=" text-[12px]">
              Lorem ipsum dolor sit amet consectetur. Ac adipiscing porta amet
              in. Nulla nunc tincidunt cursus et est id faucibus. Quam urna
              dignissim ut sed aenean bibendum
            </p>
          </div>
        </div>
        <div className="  p-[20px] flex gap-[10px]">
          <div className=" w-[100%]">
            <img src={Proflie} alt="profile" />
          </div>
          <div>
            <p className=" text-[19px] font-medium py-[5px]">James John</p>
            <p className=" text-[10px]">Lagos</p>
            <p className=" text-2xl py-[5px]">----</p>
            <p className=" text-[12px]">
              Lorem ipsum dolor sit amet consectetur. Ac adipiscing porta amet
              in. Nulla nunc tincidunt cursus et est id faucibus. Quam urna
              dignissim ut sed aenean bibendum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
