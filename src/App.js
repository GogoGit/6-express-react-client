/* 
  Adding Context (Passing Data Deeply) vs drilling it down!
    https://react.dev/learn/passing-data-deeply-with-context  
    https://legacy.reactjs.org/docs/context.html

  In deleteRecipe, check out:  .then(window.location.replace("/"));   //This is like a windows refresh page
      We eventually change it to
          del(`/api/recipes/${recipeId}`).then(
              setRecipes((recipes) => recipes.filter((recipe) => recipe._id !== recipeId))
*/

import React from "react";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import Nav from "./Nav";
import useToggle from "./hooks/useToggle";

// New line
import RecipesContext from "./RecipesContext";

function App() {
  const [recipes, setRecipes] = React.useState([]);
  const [loggedin, setLoggedin] = useToggle(false);
  const [loading, setLoading] = useToggle(true);
  const [error, setError] = React.useState("");
  const { get, post, del, put } = useFetch(`/api/recipes`);

  const addRecipe = (recipe) => {
    post("/api/recipes", recipe).then((data) => {
      setRecipes([data, ...recipes]);
    });
  };

  const editRecipe = (updatedRecipe) => {
    console.log(updatedRecipe);
    put(`/api/recipes/${updatedRecipe._id}`, updatedRecipe).then(
      get("/api/recipes").then((data) => {
        setRecipes(data);
      })
    );
  };

  const deleteRecipe = (recipeId) => {
    console.log("recipeId:", recipeId);
    // del(`/api/recipes/${recipeId}`).then(window.location.replace("/"));
    del(`/api/recipes/${recipeId}`).then(
      setRecipes((recipes) =>
        recipes.filter((recipe) => recipe._id !== recipeId)
      )
    );
  };

  // create a new variable 'value'
  //{value} now encapsulates the states that we want to track using Context (Passing Data Deeply)
  const value = { recipes, loggedin };

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    setLoading(true);
    get("/api/recipes")
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  if (loading === true) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    //New Line
    //New we pass the Provider the {value} of all the States that we want to pass via Context
    //See ~ line 57 for what {value} encapsulates
    // value = { recipes, loggedin }
    <RecipesContext.Provider value={value}>
      <main>
        <BrowserRouter>
          {/* NOTE - we no longer pass loggedin as a prop to Nav */}
          {/* <Nav setLoggedin={setLoggedin} loggedin={loggedin} /> */}
          <Nav setLoggedin={setLoggedin} />
          <Routes>
            {/* NOTE - we no longer pass recipes as a prop to Recipes */}
            <Route
              path="/"
              element={
                // <Recipes recipes={recipes} loggedin={loggedin} addRecipe={addRecipe} />
                // <Recipes loggedin={loggedin} addRecipe={addRecipe} />
                <Recipes addRecipe={addRecipe} />
              }
            />
            <Route
              path="/:recipeId"
              element={
                // <RecipeDetail recipes={recipes} deleteRecipe={deleteRecipe} loggedin={loggedin} editRecipe={editRecipe} />
                // <RecipeDetail deleteRecipe={deleteRecipe} loggedin={loggedin} editRecipe={editRecipe} />
                <RecipeDetail
                  deleteRecipe={deleteRecipe}
                  editRecipe={editRecipe}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
    </RecipesContext.Provider>
  );
}

export default App;
