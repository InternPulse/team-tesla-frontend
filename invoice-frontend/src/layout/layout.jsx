import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className=" max-w-[1150px] m-auto">
        <Navbar />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
