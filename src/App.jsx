import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Makeresume from "./pages/Makeresume";
import Header from "./components/Header";
import History from "./pages/History";
import Footer from "./components/Footer";
import Pnf from "./pages/Pnf";
import Form from "./pages/Form";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeresume" element={<Makeresume />} />
        <Route path="/history" element={<History />} />
         <Route path="/form" element={<Form />} />
        <Route path="/*" element={<Pnf/>}/>
      </Routes>
      <Footer/>
   
    </>
  );
}

export default App;
