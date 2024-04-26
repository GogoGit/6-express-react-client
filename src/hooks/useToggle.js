/*
  Note Custom Hooks 
    Bulding your own Hooks  (https://legacy.reactjs.org/docs/hooks-custom.html)

    Look at example Demo ([SECTION] Demo the hook with Toggle.js in index.js:)
        import useToggle from "./hooks/useToggle";

        function Toggler() {
            const [isHappy, toggleIsHappy] = useToggle(true);
            const [isBanana, toggleIsBanana] = useToggle(true);

            return (
                <div>
                <h1 onClick={toggleIsHappy}>{isHappy ? "😄" : "😢"}</h1>
                <h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "👹"}</h1>
                </div>
            );
        }

*/

import { useState } from "react";

function useToggle(initialVal = false) {
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  // return piece of state AND a function to toggle it
  return [state, toggle];
}

export default useToggle;
