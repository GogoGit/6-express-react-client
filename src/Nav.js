/*   
    Styled Component :)
    npm i styled-components
        Styles up the Nav Bar :)
        replaceing <Nav> with <StyledNav>

        Note Nesting in the CSS

    In JavaScript
        - you need to use camalCase to refer to certain CSS Object
        - you need to enclose values in "" (quotes)


//   Replaced with Button.js   Removed from section:  const StyledNav = styled.nav`
//   button {
//     color: #fff;
//     font-size: 1rem;
//     padding: 0.5rem;
//     margin: 0 1rem;
//     background: #007eb6;
//     border: 2px solid #fff;
//     border-radius: 3px;
//     align-self: center;
//   }

 */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button"; //Note this was a Default Export!

const StyledNav = styled.nav`
  --bg-color: #007eb6;
  --btn-color: var(
    --blue-dark
  ); //Inspect the button and look at the class name.. ie <button class="sc-beySPh fybcGq">Log In</button>

  min-height: 3rem;
  background-color: #007eb6;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  a {
    color: #fff;
    padding: 1rem;
    font-size: 2rem;
    text-decoration: none;
  }
`;

const Nav = ({ loggedin, setLoggedin }) => {
  return (
    <StyledNav>
      <h1>
        <Link to="/">Recipes</Link>
      </h1>

      {loggedin ? (
        <Button func={() => setLoggedin(false)}>Log Out</Button>
      ) : (
        <Button func={() => setLoggedin(true)}>Log In</Button>
      )}
    </StyledNav>
  );
};

export default Nav;
