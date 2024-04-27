import React from "react";
import Recipe from "./Recipe";
import FormCreateRecipe from "./FormCreateRecipe";

import RecipesContext from "./RecipesContext";

/*  This entire section is using Prop Drilling.  We are replacing it using CONTEXT (Passing Data Deeply)
function Recipes({ recipes, loggedin, addRecipe }) {
  return (
    <section>
      {loggedin && <FormCreateRecipe addRecipe={addRecipe} />}
      {recipes.map((recipe) => (
        <Recipe key={recipe._id} recipe={recipe} />
      ))}
    </section>
  );
}
*/

function Recipes({ loggedin, addRecipe }) {
  const recipes = React.useContext(RecipesContext);
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
