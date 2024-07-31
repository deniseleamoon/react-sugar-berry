import { useState } from "react";
import "./SubmissionForm.css";
import "./Styles.css";
import RecipeList from "./RecipeList";

function SubmissionForm({ onNewRecipeSubmit, recipes }) {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [recipeNameError, setRecipeNameError] = useState("");
  const [ingredientsError, setIngredientsError] = useState("");
  const [instructionsError, setInstructionsError] = useState("");
  const [imageUrlError, setImageUrlError] = useState("");
  const [formError, setFormError] = useState(null);

  const handleRecipeName = (event) => {
    const { value } = event.target;
    if (!value.trim()) {
      setRecipeNameError("Please enter ingredients.");
    } else {
      setRecipeNameError("");
    }
    setRecipeName(value);
  };

  const handleIngredients = (event) => {
    const { value } = event.target;
    if (!value.trim()) {
      setIngredientsError("Please enter ingredients.");
    } else {
      setIngredientsError("");
    }
    setIngredients(value);
  };

  const handleInstructions = (event) => {
    const { value } = event.target;
    if (!value.trim()) {
      setInstructionsError("Please enter instructions.");
    } else {
      setInstructionsError("");
    }
    setInstructions(value);
  };

  const handleImageUrl = (event) => {
    const { value } = event.target;
    if (value === "") {
      setImageUrlError("Please enter a valid URL.");
    } else {
      setImageUrlError("");
    }
    setImageUrl(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ingredientsError || instructionsError || imageUrlError) {
      setFormError("Please use valid information.");
      return;
    }

    setFormError(null);

    const newRecipe = { recipeName, ingredients, instructions, imageUrl };
    onNewRecipeSubmit(newRecipe);

    // console.log("Recipe Name:", recipeName);
    setRecipeName("");
    // console.log("Ingredients:", ingredients);
    setIngredients("");
    // console.log("Instructions:", instructions);
    setInstructions("");
    // console.log("Image Url:", imageUrl);
    setImageUrl("");
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setRecipeName("");
    setIngredients("");
    setInstructions("");
    setImageUrl("");
    setFormError(null);
    setRecipeNameError("");
    setIngredientsError("");
    setInstructionsError("");
    setImageUrlError("");
  };

  return (
    <>
      <p className="startSharing">Recipes & Cooking Ideas!</p>
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="recipeName">
          <label htmlFor="recipeName">Recipe Name:</label>
          <input
            className="enterName"
            type="text"
            required
            id="recipeName"
            onChange={handleRecipeName}
            value={recipeName}
          />
          {recipeNameError && <p className="errorMessage">{recipeNameError}</p>}
        </div>
        <div className="ingredients">
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            name="ingredients"
            type="text"
            required
            id="ingredients"
            placeholder="Enter a comma between each ingredient."
            onChange={handleIngredients}
            value={ingredients}
          ></textarea>
          {ingredientsError && (
            <p className="errorMessage">{ingredientsError}</p>
          )}
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            name="instructions"
            type="text"
            required
            id="instructions"
            placeholder="Enter a comma between each instruction."
            onChange={handleInstructions}
            value={instructions}
          ></textarea>
          {instructionsError && (
            <p className="errorMessage">{instructionsError}</p>
          )}
        </div>
        <div>
          <label htmlFor="imageUrl">Image url:</label>
          <input
            className="imageUrl"
            type="url"
            required
            id="imageUrl"
            onChange={handleImageUrl}
            value={imageUrl}
          />
          {imageUrlError && <p className="errorMessage">{imageUrlError}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {formSubmitted ? (
        <>
          <p className="thankYouMessage">Thank you for sharing.</p>
          {/* <div>
      <button className="shareButton" onClick={resetForm}></button>
     </div> */}
        </>
      ) : (
        <p className="recipeNotSubmittedMessage">Upload your recipe.</p>
      )}
    </>
  );
}

export default SubmissionForm;
