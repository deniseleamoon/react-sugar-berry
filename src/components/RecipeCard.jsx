import React from "react";
import "./RecipeCard.css";
import { useState } from "react";

function RecipeCard({ recipe }) {
  const [clicked, setClicked] = useState(false);

  const ingredientList = [];
  for (const ingredient of recipe.ingredients.split(",")) {
    ingredientList.push(<li key={ingredient}>{ingredient}</li>);
  }

  const instructionList = [];
  for (const instruction of recipe.instructions.split(",")) {
    instructionList.push(<li key={instruction}>{instruction}</li>);
  }

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="cardContainer">
        <div className="recipe-card">
          <h3>{recipe.recipeName}</h3>
          <img src={recipe.imageUrl} alt={`${recipe.recipeName} image`} />
          <h4 className="ingredientsTitle">Ingredients</h4>
          <hr></hr>
          <div className="ingredientsList">
            <ul>{ingredientList}</ul>
          </div>

          <h4 className="instructionsTitle">Instructions</h4>
          <hr></hr>
          <div className="instructionsList">
            <ol>{instructionList}</ol>
          </div>

          <h4
            className={clicked ? "emojiHeartBtn clicked" : "emojiHeartBtn"}
            onClick={handleClick}
          >
            &#x2764;
          </h4>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
