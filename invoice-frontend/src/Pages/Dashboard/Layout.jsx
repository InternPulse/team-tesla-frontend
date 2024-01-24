/* eslint-disable react/prop-types */
import SideNav from "./components/SideNav";

export default function Layout({ children }) {
  return (
    <div className="flex w-full">
      <div className=" w-[20%]">
        <SideNav />
      </div>{" "}
      <main className="p-4 bg-offGray w-full">{children}</main>
    </div>
  );
}
