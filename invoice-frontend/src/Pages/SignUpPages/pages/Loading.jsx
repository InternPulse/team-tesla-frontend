import Spinner from "../component/Spinner";
import Pulse from "/Exclude.png";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

export default function Loading() {
  const history = useHistory();

  useEffect;
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div>
        <div className="mt-32  flex justify-center">
          <img src={Pulse} alt="Invoice Pulse" className="pb-5 " />
        </div>
        <div className="flex justify-center">
          <Spinner />
        </div>
      </div>
    </div>
  );
}
