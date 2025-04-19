import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";

// Import project pages
import ShadowsOfJusticeProject from './components/projects/shadowsofjustice';
import EchoesOfTheForest from './components/projects/echoesoftheforest'; // ✅ Import added here

function Home() {
    return (
        <>
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Footer />
        </>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/shadowsofjustice" element={<ShadowsOfJusticeProject />} />
            <Route path="/projects/echoesoftheforest" element={<EchoesOfTheForest />} /> {/* ✅ New route added */}
        </Routes>
    );
}

export default App;
