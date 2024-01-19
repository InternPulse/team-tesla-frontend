import Mockupdata from "./data/Mockupdata";
import Card from "./component/Card";
import Pulse from "/Exclude.png";
import { Link } from "react-router-dom";

import { useState } from "react";

export default function OnBoarding() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center">
        <div className="mt-24">
          {/* <h1 className="text-5xl text-center py-20">Logo</h1> */}
          <div className="flex flex-col items-center">
            <img src={Pulse} />
            <div className="max-w-screen-2xl mx-auto">
              <h2 className="text-2xl text-slate-500">
                What type of account would you like to create?
              </h2>
              <p className="mt-4 text-lg">
                Select the account type that best meets your needs.
              </p>
            </div>
            <div className="grid grid-cols-2 mt-10 gap-x-10">
              {Mockupdata.map((data, index) => (
                <Card
                  data={data}
                  key={index}
                  onClick={() => handleCardClick(index)}
                  selected={index === selectedCardIndex}
                />
              ))}
            </div>
            <Link
              to={
                selectedCardIndex !== null
                  ? Mockupdata[selectedCardIndex].type === "user"
                    ? "/user-registration"
                    : "/business-registration"
                  : null
              }
              className="bg-slate-500 text-white text-center w-96 mt-14 py-4 px-10 hover:bg-slate-600 transition ease-in-out"
            >
              Continue
            </Link>
            <p className="text-slate-600 text-sm mt-3">
              Already have an account?{" "}
              <Link to="/login" className="text-black">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
