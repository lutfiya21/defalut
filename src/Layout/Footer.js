import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-cyan-700 text-white h-20">
            <div>
                <h1 className="text-2xl text-zinc-200 font-bold ">Logo</h1>
            </div>
            <div>
                <Link to="/" className="font-semibold text-slate-300 hover:text-red-200">Home</Link>
                <Link to="/about" className="font-semibold mx-3 text-slate-300 hover:text-red-200">Home</Link>
            </div>
        </footer>
    );
}

export default Footer;