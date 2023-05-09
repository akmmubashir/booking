import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container-fluid p-0">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
