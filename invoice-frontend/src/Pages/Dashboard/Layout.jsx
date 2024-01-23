/* eslint-disable react/prop-types */
import SideNav from "./components/SideNav";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-grow p-4">{children}</div>
    </div>
  );
}
