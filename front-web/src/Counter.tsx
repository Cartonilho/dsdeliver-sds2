import React, { useState } from 'react';

function Counter(){

const [counter,setCounter] = useState(0);
const handleIncrease = () =>{
    console.log('Incrementar')
    setCounter(counter+1);
}

const handleDecrease = () =>{
    console.log('Decrementar')
    setCounter(counter-1);
}

    return(
        <div>
            <button onClick={handleIncrease}>Incremetar</button>
            <button onClick={handleDecrease}>Decremetar</button>
            <h1>Valor do Contador: {counter}</h1>
        </div>
    

    )
}

export default Counter;