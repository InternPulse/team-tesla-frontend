import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <div className="  max-w-[1100px] m-auto">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
