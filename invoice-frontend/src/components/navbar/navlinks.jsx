import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <div>
      <div className=" flex gap-[40px] flex-row">
        <Link to="/">Home</Link>
        <Link to="/">Features</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Testimonials</Link>
      </div>
    </div>
  );
};

export default Navlinks;
