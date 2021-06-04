import React, { useState } from 'react';

function AddSub() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        if(count<10){
            setCount(count => count + 1);
        }else{
            alert("Can't increament the value  more than 10: Acces Denied")
        }
        
      };
      const handleDecrement = () => {
          if(count>0){
            setCount(count => count - 1);
          }else{
            alert("Can't decrement the value less than 0: Acces Denied")
          }
        
      };

    return (
        <div>
             <button onClick={handleDecrement}>Click for decreament(-)</button>
            <button onClick={handleIncrement}>Click for increament(+)</button>
            <h5>Count is :{count}</h5>
        </div>
    )
}

export default AddSub
