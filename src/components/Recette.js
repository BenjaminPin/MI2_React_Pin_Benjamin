import { useState } from "react";
import axios from 'axios';

export default function Recette() {
     
     const [recette, setRecette] = useState({});

     const searchName = async (event) => {
         axios.get(
              `https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`
         ).then((response) => {
              setRecette(response.data.meals);
         });
     };

    let recettes = [];
    if(recette != null)
    {
     for (let i = 0; i < recette.length; i++) {

          let formatInstructions =  recette[i].strInstructions.substring(0,400);
          formatInstructions += "...";

          recettes.push({
               name: recette[i].strMeal,
               instructions: formatInstructions,
               origin: recette[i].strArea,
               image: recette[i].strMealThumb,
          });
     }
               return (
                    <div>
                         <h1 className='title'>Appli Recettes de cuisine</h1>
                         <div className="inputContainer">
                              <input className='searchMeal' type="text" placeholder="Tapez le nom d'un aliment (en anglais)" onChange={searchName}/>
                         </div>

                         <div className="page">

                              {recettes.map((element) => (
                                   <div className="cardRecette">
                                        <h1>{element.name}</h1>

                                        <p className="origin">Origin: {element.origin}</p>

                                        <div className="imgContainer">
                                             <img src={element.image} alt="Description"/>
                                        </div>

                                        <p>{element.instructions}</p>
                                   </div>
                              ))}
                         </div>
                    </div>
               );
    }
    else{
          return (
               <div>
                    <h1 className='title'>Appli Recettes de cuisine</h1>
                    <div className="inputContainer">
                         <input className='searchMeal' type="text" placeholder="Tapez le nom d'un aliment (en anglais)" onChange={searchName}/>
                    </div>
                    <p className="error">
                         Aucune recette ne correspond à votre recherche
                    </p>
               </div>
          );     
    }

}