import Footer from "./Footer";
import Heder from "./Header";

function Layout(props) {
    return (
        <div>
            <Heder />
            <div className="flex-1">
                <div className="max-w-6xl mx-auto">{props.children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;