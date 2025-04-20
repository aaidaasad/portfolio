import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import MindCraftProject from './components/projects/MindCraftProject';
import {Route, Routes} from "react-router-dom";

<<<<<<< HEAD
// Import project pages
import ShadowsOfJusticeProject from './components/projects/shadowsofjustice';
import EchoesOfTheForest from './components/projects/echoesoftheforest';
import TheLionWithin from './components/projects/thelionwithin';
import EternalRose from './components/projects/eternalroses'; // ✅ Newly added
=======
>>>>>>> parent of 72cf9e2f (push)

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
<<<<<<< HEAD
            <Route path="/projects/shadowsofjustice" element={<ShadowsOfJusticeProject />} />
            <Route path="/projects/echoesoftheforest" element={<EchoesOfTheForest />} />
            <Route path="/projects/thelionwithin" element={<TheLionWithin />} />
            <Route path="/projects/eternalroses" element={<EternalRose />} /> 
=======
            <Route path="/projects/mindcraft" element={<MindCraftProject />} />
>>>>>>> parent of 72cf9e2f (push)
        </Routes>
    );
}

export default App;