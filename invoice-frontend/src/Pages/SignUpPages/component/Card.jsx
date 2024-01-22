/* eslint-disable react/prop-types */
export default function Card({ data, onClick, selected }) {
  return (
    <div
      onClick={onClick}
      className={`${
        selected ? "border border-mustard" : "border border-lightMustard"
      } py-9 px-4 flex flex-col rounded-md cursor-pointer font-Montserrat `}
    >
      <img src={data.svg} alt="" className="w-7 h-7" />
      <h1 className="mt-4">{data.title}</h1>
      <p className="text-slate-500 text-sm mt-4 w-44">{data.text}</p>
    </div>
  );
}
