import React, {useState} from 'react';
import"./Counter.css";

function Counter() {

    const [counter, setCounter] =useState(0);
    const [data, setData] =useState("");

    const addCounter = () =>{
        setCounter(counter+1)
    }

    const subCounter = () =>{
        setCounter(counter-1)
    }
    return (
        <>
        <article className={"counter"}>

            <h2>Counter:</h2>
            <section>
            <button onClick={addCounter}>+</button>
            <h2>{counter}</h2>
            <button onClick={subCounter}>-</button>
            </section>
        </article>

        <article className={"counter"}>
            <h2>Input:</h2>
            <input onChange={(event) => setData(event.target.value) }/>
            <p>Input: {data}</p>
        </article>
        </>
    );
}

export default Counter;