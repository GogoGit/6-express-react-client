/*
    Creating a Reusable Button Component

        look in index.css file... we commented out the button section.
*/

import React from "react";
import styled from "styled-components";

/* 
    Note we don't have
         --btn-color
         --btn-bgg

    defined in the code as yet.  If we don't define it, the second parameter is used!
        var(--btn-color, #bada55);
            #bada55 (is used!)

            See Nav.js
*/

const StyledButton = styled.button`
  --btn-bg: var(--btn-color, #bada55);
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0 1rem;
  background: var(--btn-bg);
  border: 2px solid #fff;
  border-radius: 3px;
  align-self: center;
  cursor: pointer;
`;

export default function Button({ children, func }) {
  return <StyledButton onClick={func}>{children}</StyledButton>;
}
