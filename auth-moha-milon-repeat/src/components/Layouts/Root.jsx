import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="w-10/12 mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}
