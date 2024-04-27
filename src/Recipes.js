import React from "react";
import Recipe from "./Recipe";
import FormCreateRecipe from "./FormCreateRecipe";
import RecipesContext from "./RecipesContext";

// function Recipes({ loggedin, addRecipe }) {
function Recipes({ addRecipe }) {
  // const recipes = React.useContext(RecipesContext);
  const { recipes, loggedin } = React.useContext(RecipesContext);
  return (
    <section>
      {loggedin && <FormCreateRecipe addRecipe={addRecipe} />}
      {recipes.map((recipe) => (
        <Recipe key={recipe._id} recipe={recipe} />
      ))}
    </section>
  );
}

export default Recipes;
