/* eslint-disable react/prop-types */
// TableComponent.jsx

const TableComponent = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return <div>No data available</div>;
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "overdue":
        return " text-error";
      case "paid":
        return " text-success";
      case "pending":
        return " text-warn ";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border-b rounded-[10px]">
        <thead>
          <tr className="font-Montserrat font-[600]">
            <th>#</th>
            <th>Client Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="font-Montserrat font-[400] mb-10 ">
              <td className="text-center py-8 text-[12px]">{item.id}</td>
              <td className="text-center py-8 text-[12px]">
                {item.clientName}
              </td>
              <td className="text-center py-8 text-[12px]">
                {new Date(item.Date).toLocaleDateString()}
              </td>
              <td className="text-center py-8 text-[12px]">{item.amount}</td>
              <td
                className={`rounded-full    text-center ${getStatusColor(
                  item.status
                )}`}
              >
                {item.status}
              </td>{" "}
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="pl-2 pt-4 font-Montserrat font-[600] text-yellowShade">
        Show all
      </h1>
    </div>
  );
};

export default TableComponent;
