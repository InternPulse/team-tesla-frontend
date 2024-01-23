/* eslint-disable react/prop-types */
export default function Cards({ title, percent, amount }) {
  return (
    <div className="  font-Montserrat shadow-lg px-10  rounded-lg p-4">
      <div className="flex items-center space-x-14">
        <h1 className="font-[400px] text-[17px]">{title}</h1>
        <h2 className="text-success text-[14px] font-[700]">
          {percent}%{" "}
          <span className="text-successTint font-[400]">
            from <br /> last month
          </span>
        </h2>
      </div>
      <h1 className="text-[30px] text-slightGray font-Nunito font-[500px]">
        {amount}
      </h1>
    </div>
  );
}
