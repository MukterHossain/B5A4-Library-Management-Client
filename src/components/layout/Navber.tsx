import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";
import Logo from "../../assets/Logo.png"


export default function Navber() {
    return (
        <div className=" h-16  shadow px-2 flex items-center">
            <div className="flex w-full justify-between items-center">
                <div className="flex  flex-start ">
                <img src={Logo} alt="Logo" className="w-[50px] "/>                  
                </div>
                <div className="flex justify-center text-[13px] sm:text-[16px] gap-x-2 sm:gap-x-4 w-4/5 font-bold">
                    <Link to="/books">All Books</Link>
                    <Link to="/create-book">Add Book</Link>
                    <Link to="/summary">Borrow Summary</Link>
                </div>
                <div>
                    <ModeToggle></ModeToggle>
                </div>
            </div>
        </div>
    )
}
