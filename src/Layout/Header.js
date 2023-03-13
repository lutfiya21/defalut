import { Link } from "react-router-dom";

function Heder() {
    return (
        <header className="bg-cyan-700 h-24 flex justify-between items-center text-white">
            <div>
                <h1 className="text-2xl text-zinc-200 font-bold ">Logo</h1>
            </div>
            <div>
                <Link to="/" className="font-semibold text-slate-300 hover:text-red-200">Home</Link>
                <Link to="/about" className="font-semibold mx-3 text-slate-300 hover:text-red-200">Home</Link>
            </div>
            <button className="w-[32px] h-[32px] bg-red-700 text-white rounded-[15px]">Submit</button>
        </header>
    );
}

export default Heder;