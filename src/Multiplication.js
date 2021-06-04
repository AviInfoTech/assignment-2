import React, { useState } from 'react';

function Multiplication() {
    const [multi, setMultiplication] = useState({ data: []});
    
    const multiply = () => {
        console.log("clicked")
        const arr=[];
        const number = parseInt(prompt('Enter a Number for table: '));
        const range = parseInt(prompt('Enter a range: '));
        for(let i = 1; i <= range; i++) {
            const result = i * number;
            console.log((`${number} * ${i} = ${result}`));
            arr[i]=+number +"x"+i+"="+number*i +",";      
        } 
        setMultiplication( { data : arr} ) 
       
      
      }
    return (
        <div>
            <div id="table">
                { multi.data && multi.data.map((c) => <div>{c}</div>)}
                </div>
            <button onClick={multiply }>Multiplication</button>
        </div>
    )
}

export default Multiplication
