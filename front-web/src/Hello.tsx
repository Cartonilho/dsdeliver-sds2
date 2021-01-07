import React, { useEffect } from 'react';

type Props ={
    message : string;
}

function Hello({message}: Props){
    useEffect(()=>{
        console.log('componente iniciou !');
    },[]);
    return(
    <h1>hello {message}!</h1>
    )
}

export default Hello; 