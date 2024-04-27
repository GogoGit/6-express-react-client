import React from "react";
import Recipe from "./Recipe";
import FormCreateRecipe from "./FormCreateRecipe";

//New Line
import RecipesContext from "./RecipesContext";

//Replacing Prop Drilling with Context (Passing Data Deeply)
// function Recipes({ recipes, loggedin, addRecipe }) {
// function Recipes({ loggedin, addRecipe }) {
function Recipes({ addRecipe }) {
  //New Line
  // const recipes = React.useContext(RecipesContext);
  //With more State variables being passed using Context we can use the spread operation on {value} that is being passed to extract the State we want to update
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
