import "./App.css";
import RecipeList from "./components/RecipeList";
import SubmissionForm from "./components/SubmissionForm";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const handleNewRecipeSubmit = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <>
      <div className="backgroundContainer">
        <div className="titleContainer">
          <h2 className="shareRecipeHeaderTitle">Sugar Berry</h2>
          <span className="recipeHeaderTitle">
            Share Your Favorite Recipes{" "}
            <span className="strawberry">&#127827;</span>
          </span>
        </div>
        <div className="backgroundBottom">
          <div className="submitForm">
            <SubmissionForm
              onNewRecipeSubmit={handleNewRecipeSubmit}
              recipes={recipes}
            />
            <div className="backGroundRecipeContainer">
              <RecipeList recipes={recipes} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default App;
