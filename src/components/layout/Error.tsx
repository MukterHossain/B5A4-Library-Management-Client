import { Link } from "react-router"
import error from "../../assets/error.png"

export default function Error() {
    return (
        <div className="flex max-w-xl mx-auto flex-col justify-center items-center min-h-screen ">
            <div className="p-10 rounded-lg shadow  md:flex-row bg-pink-50 hover:bg-amber-50 duration-300">
                <div className=" flex justify-center items-center flex-col">
                    <img src={error} alt="Logo" className="w-[200px] " />
                    <h1 className="text-2xl text-center mt-3  text-red-700">Something went wrong!!</h1>
                </div>
                
                <div className="flex justify-center mt-2">
                    <Link to="/"><button className="bg-blue-600 duration-300 text-white px-4 py-2 rounded-sm font-bold hover:bg-blue-500">Go Home</button></Link>
                </div>
            </div>
        </div>
    )
}
