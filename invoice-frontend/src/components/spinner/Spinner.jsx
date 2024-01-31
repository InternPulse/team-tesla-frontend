import ClipLoader from "react-spinners/ClipLoader";

function Spinner({ loading, color = "#FFDB58", size = 15 }) {
  return <ClipLoader loading={loading} color={color} size={size} />;
}

export default Spinner;
