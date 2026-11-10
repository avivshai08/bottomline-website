import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LandingLayout from "./components/LandingLayout";
import About from "./pages/About";
import ProfitFirst from "./pages/ProfitFirst";
import Cfo from "./pages/Cfo";
import BusinessGame from "./pages/BusinessGame";
import GameLanding from "./pages/GameLanding";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/mashakim" element={<Navigate to="/hugim" replace />} />
      <Route element={<LandingLayout />}>
        <Route path="/hugim" element={<GameLanding />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/" element={<About />} />
        <Route path="/profit-first" element={<ProfitFirst />} />
        <Route path="/cfo" element={<Cfo />} />
        <Route path="/business-game" element={<BusinessGame />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
