const InvoiceCard = ({ children }) => {
  return (
    <div className="  mt-[42px] pb-[48px] bg-white border border-solid border-gray-300 rounded pl-[45px] pr-[180px]">
      <div>{children}</div>
    </div>
  );
};

export default InvoiceCard;
