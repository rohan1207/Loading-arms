import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MobileBlocker from "./components/layout/MobileBlocker";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Clients from "./pages/Clients";
import GlobalPresence from "./pages/GlobalPresence";
import Careers from "./pages/Careers";
import Enquiry from "./pages/Enquiry";
import Download from "./pages/Download";

function App() {
  return (
    <MobileBlocker>
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/global-presence" element={<GlobalPresence />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </main>
      </div>
    </MobileBlocker>
  );
}

export default App;
