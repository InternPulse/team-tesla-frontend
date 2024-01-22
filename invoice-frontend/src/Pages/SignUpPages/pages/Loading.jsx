import Spinner from "../component/Spinner";
import Pulse from "/Exclude.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const fakeLoadingProcess = setTimeout(() => {
      navigate("/dashboard");
    }, 3000);

    return () => clearTimeout(fakeLoadingProcess);
  }, [navigate]);

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
