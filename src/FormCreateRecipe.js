/*
    {} is an object :)

    Funtional Programming 

    Note Section using the following 2 things:  (We are setting State!)
        - Spread syntax (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
        - 'Computed Property Names in JavaScript'  (https://ui.dev/computed-property-names)
        it uses the {} object to update the key, value pairs in the object


        **The above is advanced.  Easy would be creating each variable as a single item to track vs using an object.

*/

import React from "react";
import Button from "./Button";

//Normally you would update these as empty strings but we set values to make testing easier!
//**** it should be "created" vs "year" if we look at the db schema.
//      See http://localhost:3456/api/recipes and you'll see what happens when you add a recipe.. you don't see "year".
const FormCreateRecipe = ({ addRecipe }) => {
  const [values, setValues] = React.useState({
    title: "Recipe Title",
    image: "toast.png",
    description: "Description of the recipe",
    year: "2021",
  });

  //uses Default Submit Action
  const createRecipe = (event) => {
    event.preventDefault();
    const recipe = {
      title: values.title,
      image: values.image,
      description: values.description,
      year: values.year,
      //   year should be 'created' if we look at the database.
    };
    console.log(" making a recipe ", recipe);
    addRecipe(recipe); //Note we get the following error "VM11961:1 Uncaught (in promise) SyntaxError: Unexpected token 'A', "Accepted" is not valid JSON"
    //becuase it's not JSON... we would need to update the code...  Refreshing the page though you would see the added item.
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target; //Get 'name' and 'value' from the Target!!!
    console.log(" name:: ", name, " value:: ", value);
    // computed property names
    setValues({
      ...values,
      [name]: value,
    }); /* We know what setValue is and we pair it with ... (Spread syntax) 
                                                    it then uses the 'Computed Property Names' in JavaScript -> see code    [name]: value,
                                                    to update the key value pair in the object with the data that was updated
                                                    This is pretty slick!!!*/
  };

  return (
    <div>
      <h3>Add Recipe Form</h3>
      <form onSubmit={createRecipe}>
        <input
          type="text"
          placeholder="Recipe title"
          value={values.title}
          name="title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Recipe image"
          value={values.image}
          name="image"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Recipe description"
          name="description"
          onChange={handleInputChange}
          value={values.description}
        />
        <input
          type="text"
          placeholder="Recipe year"
          value={values.year}
          name="year"
          onChange={handleInputChange}
        />

        <Button type="submit">Add Recipe</Button>
      </form>
    </div>
  );
};

export default FormCreateRecipe;
