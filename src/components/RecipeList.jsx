import React from "react";
import RecipeCard from "./RecipeCard";
// import "./RecipeList.css";

function RecipeList({ recipes }) {
  const recipeCards = [];
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    recipeCards.push(<RecipeCard key={i} recipe={recipe} />);
  }
  return (
    <>
      <div className="recipes">{recipeCards}</div>
    </>
  );
}

export default RecipeList;
