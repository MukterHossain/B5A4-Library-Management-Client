import { Outlet } from "react-router";
import Navber from "./Navber";
import Footer from "./Footer";


export default function MainLayout() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen px-5">
      <Navber></Navber>
      <div className="min-h-[calc(100vh-281px)] pb-10">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}
