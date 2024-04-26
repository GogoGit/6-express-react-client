/*
  Since this is a SPA, we don't want the page to refresh
    so we use the 'react-reater-dom' object
    ***Use the Link Component

  Notice the use of the spread operator, it allows you from using currRecipe[0] as an example
    ***const thisRecipe = { ...currRecipe[0] };  //Notice using the spread operator to create a new object!


*/

import React from "react";
import { Link, useParams } from "react-router-dom";

function RecipeDetail(props) {
  const { recipeId } = useParams();
  const currRecipe = props.recipes.filter((recipe) => recipe._id === recipeId);
  const thisRecipe = { ...currRecipe[0] }; //Notice using the spread operator to create a new object!

  return (
    <div>
      <img src={`/img/${thisRecipe.image}`} alt={thisRecipe.title} />
      <h1>{thisRecipe.title}</h1>
      <p>{thisRecipe.description}</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default RecipeDetail;
