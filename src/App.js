import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import MindCraftProject from './components/projects/MindCraftProject';
import {Route, Routes} from "react-router-dom";


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
            <Route path="/projects/mindcraft" element={<MindCraftProject />} />
        </Routes>
    );
}

export default App;