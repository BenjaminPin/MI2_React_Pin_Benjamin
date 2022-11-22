export default function Recette({ recette }) {
    let recettes = [];
    for (let i = 0; i < recette.length; i++) {
         recettes.push({
              name: recette[i].strMeal,
              instructions: recette[i].strInstructions,
              origin: recette[i].strArea,
              image: recette[i].strMealThumb,
         });
    }

    return (
         <div className="page">
              {recettes.map((element) => (
                   <div className="cardRecette">
                        <h1>{element.name}</h1>

                        <p className="origin">Origin: {element.origin}</p>

                        <div className="imgContainer">
                            <img src={element.image} alt="Test" />
                        </div>

                        <p>{element.instructions}</p>
                   </div>
              ))}
         </div>
    );
}