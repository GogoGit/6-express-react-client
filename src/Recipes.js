import React from "react";
import Recipe from "./Recipe";
import FormCreateRecipe from "./FormCreateRecipe";

// function Recipes({ recipes }) {
//   return (
//     <summary>
//       {recipes.map((recipe) => (
//         // Note for React we need a key (we used index when we didn't have an ID to use!)
//         <Recipe key={recipe._id} recipe={recipe} />
//       ))}
//     </summary>
//   );
// }

// function Recipes({ recipes, loggedin }) {
function Recipes({ recipes, loggedin, addRecipe }) {
  return (
    <section>
      {/* {loggedin && <FormCreateRecipe  />} */}
      {loggedin && <FormCreateRecipe addRecipe={addRecipe} />}
      {recipes.map((recipe) => (
        // Note for React we need a key (we used index when we didn't have an ID to use!)
        <Recipe key={recipe._id} recipe={recipe} />
      ))}
    </section>
  );
}

export default Recipes;
