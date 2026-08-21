import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import ProfitFirst from "./pages/ProfitFirst";
import Cfo from "./pages/Cfo";
import BusinessGame from "./pages/BusinessGame";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<About />} />
        <Route path="/profit-first" element={<ProfitFirst />} />
        <Route path="/cfo" element={<Cfo />} />
        <Route path="/business-game" element={<BusinessGame />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
