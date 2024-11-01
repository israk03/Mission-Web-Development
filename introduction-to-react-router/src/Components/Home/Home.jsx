import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
}
