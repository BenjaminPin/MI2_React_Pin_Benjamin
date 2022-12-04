//CSS
import './App.css';
//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Recette from "./components/Recette";
import Blog from "./components/Blog";

const App = () => {
    return (
         <div>
            <nav>
                <a href="/" className='navItem'>Recettes</a>
                <a href="/blog" className='navItem'>Blog</a>
            </nav>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Recette/>} />
                    <Route path="/recettes" element={<Recette/>} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </BrowserRouter>
         </div>
    );
};

export default App;