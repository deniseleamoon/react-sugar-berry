import "./App.css";
import NavBar from "./components/NavBar";
import RecipeList from "./components/RecipeList";
import SubmissionForm from "./components/SubmissionForm";
import Footer from "./components/Footer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const starterRecipes = [
  {
    id: 1,
    recipeName: "Berry Bliss Smoothie",
    description: "A refreshing smoothie for warm days.",
    ingredients: "strawberries, blueberries, banana, almond milk, honey",
    instructions: "Blend all ingredients, Pour into glass, Serve chilled",
    imageUrl: "https://source.unsplash.com/400x300/?smoothie",
  },
  {
    id: 2,
    recipeName: "Avocado Toast",
    description: "A healthy and simple breakfast.",
    ingredients: "bread, avocado, salt, pepper, lemon juice",
    instructions: "Toast bread, Mash avocado, Spread on toast, Season to taste",
    imageUrl: "https://source.unsplash.com/400x300/?avocado",
  },
];

function App() {
  const [recipes, setRecipes] = useState(starterRecipes);

  const handleNewRecipeSubmit = (newRecipe) => {
    const recipeWithId = {
      ...newRecipe,
      id: Date.now(), // or recipes.length + 1
    };
    setRecipes([...recipes, recipeWithId]);
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
        <div>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
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
              }
            />
            {/* You can add more <Route> components here if you expand the app */}
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}
export default App;
