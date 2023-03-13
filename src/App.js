import { Route, Routes } from "react-router-dom";
import AboutRoute from "./pages/about";
import HomeRoute from "./pages/Home";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<AboutRoute />} />
      </Routes>

    </>
  );
}

export default App;
