import React,{ useState } from "react";
export default function Counter() {
    const [count,setCount]=useState(0);
    return(
        <>
          <button onClick={() => setCount(count +1)}> Plus </button>{" "}
          <p> Count variable value is {count}</p>{" "}
          <button onClick={() => setCount(count-1)}>Minus</button>
        </>
    );
}