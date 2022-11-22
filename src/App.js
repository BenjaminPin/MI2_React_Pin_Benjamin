import axios from 'axios';
import React, { useState } from "react";
import Recette from "./components/Recette";
import './App.css';

const App = () => {
    const [recette, setRecette] = useState({});
    const onChange = async (event) => {
        axios.get(
             `https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`
        ).then((response) => {
             setRecette(response.data.meals);
        });
    };
    

    return (
         <div>
                <h1 className='title'>Appli Recettes de cuisine</h1>
                <div className="inputContainer">
                    <input className='searchMeal' type="text" placeholder="Tapez le nom d'un aliment (en anglais)" onChange={onChange}/>
                </div>
                <Recette recette={recette}></Recette>
         </div>
    );
};

export default App;