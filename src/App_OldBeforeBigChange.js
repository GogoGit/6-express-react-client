/*
  React components start with a Capital Letter!!! 

  Client side Routing (https://reactrouter.com/en/6.23.0/start/overview)
    npm i react-router-dom

*/

// Do you know why we check for response.ok while using fetch
// https://dev.to/myogeshchavan97/do-you-know-why-we-check-for-response-ok-while-using-fetch-1mkd

// Big Change after Super Fetch command

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";
import { useFetch } from "./hooks/useFetch"; //Not a default Import (Named Export), allows you to export multiple items
import Nav from "./Nav";
import useToggle from "./hooks/useToggle"; //Default Export

function App() {
  // const [recipes, setRecipes] = React.useState([]);    //useFetch Hook is responsible for returning the data
  //Rear example where we are not using [], we are using {} because we are returning an Object
  //Deconstructing ... note data is being recast as recipes

  /*  Replacing this with useToggle
  const [loggedin, setLoggedin] = React.useState(false);
  */
  const [loggedin, setLoggedin] = useToggle(false);

  const { loading, data: recipes, error } = useFetch("/api/recipes");

  if (loading === true) {
    return <p>Loading</p>; //You can add a loading screen :)
  }

  if (error) {
    return <p>{error}</p>;
  }

  /*  Section replace with -> const { loading, data: recipes, error } = useFetch("/api/recipes");
  React.useEffect(() => {
    fetch(`/api/recipes`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => setRecipes(data))
      .catch((err) => console.log(err));
  }, []);

  */

  return (
    <main>
      <BrowserRouter>
        <Nav setLoggedin={setLoggedin} loggedin={loggedin} />
        <Routes>
          {/* <Route path="/" element={<Recipes recipes={recipes} />} /> */}
          <Route
            path="/"
            element={<Recipes recipes={recipes} loggedin={loggedin} />}
          />

          <Route
            path="/:recipeId"
            element={<RecipeDetail recipes={recipes} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
