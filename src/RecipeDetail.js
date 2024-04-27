/*
  Since this is a SPA, we don't want the page to refresh
    so we use the 'react-reater-dom' object
    ***Use the Link Component

  Notice the use of the spread operator, it allows you from using currRecipe[0] as an example
    ***const thisRecipe = { ...currRecipe[0] };  //Notice using the spread operator to create a new object!
*/

import React from "react";
import FormEditRecipe from "./FormEditRecipe";
import { Link, useParams } from "react-router-dom";

import RecipesContext from "./RecipesContext";

/* We are replacing Prop Drilling and using CONTEXT (Passing Data Deeply)
function RecipeDetail({ recipes, loggedin, deleteRecipe, editRecipe }) {
*/
function RecipeDetail({ loggedin, deleteRecipe, editRecipe }) {
  const recipes = React.useContext(RecipesContext);

  const { recipeId } = useParams();
  const [recipeDeleted, setRecipeDeleted] = React.useState(false);

  const currRecipe = recipes.filter((recipe) => recipe._id === recipeId);
  const thisRecipe = { ...currRecipe[0] };

  const delRecipe = () => {
    deleteRecipe(thisRecipe._id);
    setRecipeDeleted(true);
  };

  if (recipeDeleted) {
    return (
      <>
        <p>Recipe deleted!</p>
        <Link to="/">Home</Link>
      </>
    );
  }

  return (
    <div>
      {loggedin && (
        <section>
          <FormEditRecipe thisRecipe={thisRecipe} editRecipe={editRecipe} />
          <button onClick={() => delRecipe()}>delete</button>
        </section>
      )}

      <img src={`/img/${thisRecipe.image}`} alt={thisRecipe.title} />
      <h1>{thisRecipe.title}</h1>
      <p>{thisRecipe.description}</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default RecipeDetail;
