/* eslint-disable react/prop-types */
import SideNav from "./components/SideNav";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <SideNav />
      <main className="p-4 bg-offGray w-full">{children}</main>
    </div>
  );
}
