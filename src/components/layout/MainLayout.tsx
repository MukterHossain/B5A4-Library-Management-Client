import { Outlet } from "react-router";
import Navber from "./Navber";


export default function MainLayout() {
  return (
    <div className="max-w-7xl mx-auto  px-5">
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  )
}
