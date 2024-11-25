import { Outlet } from "react-router-dom";
import Header from "../header/Header";

export default function Main() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}
