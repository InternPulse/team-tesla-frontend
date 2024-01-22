import Spinner from "../component/Spinner";
import Pulse from "/Exclude.png";

export default function Loading() {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="">
        <div className="mt-32 ml-8">
          <img src={Pulse} alt="Invoice Pulse" className="pb-5 " />
        </div>
        <div className="flex justify-center">
          <Spinner />
        </div>
      </div>
    </div>
  );
}
