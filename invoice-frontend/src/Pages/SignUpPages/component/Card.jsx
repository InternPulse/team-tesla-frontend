/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Card({ data, onClick }) {
  const [option, setOption] = useState(false);

  const handleCardClick = () => {
    setOption(!option);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={`${
        option ? "bg-mustard" : "bg-white outline outline-1 outline-mustard"
      } border py-[20px] px-4 flex flex-col rounded-md cursor-pointer font-Montserrat `}
    >
      <img src={data.svg} alt="" className="w-7 h-7" />
      <h1
        className={`${
          option ? "mt-4 font-medium  text-white" : "mt-4 font-medium"
        }`}
      >
        {data.title}
      </h1>
      <p
        className={`${
          option
            ? "text-white text-[13px] mt-4 w-44"
            : "text-slate-500 text-[13px] mt-4 w-44"
        }`}
      >
        {data.text}
      </p>
    </div>
  );
}
