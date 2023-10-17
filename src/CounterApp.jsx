import PropTypes from 'prop-types'
import { useState } from 'react';

export const CounterApp = ({value})=>{
    const [counter,setCounter] = useState(value);
    return (
        <>
            <h2>Counter App</h2>

            <div style={{ display: "flex", alignItems:"center" ,gap: "10px" }}>
                <button onClick={()=>{counter===0?setCounter(value):setCounter(counter-1)}}>-</button>
                <p> {counter} </p>
                <button onClick={()=>{setCounter(counter+1)}}>+</button>
                <button onClick={()=>{setCounter(value)}}>Reset</button>
            </div>

        </>
    );
}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired,

}


   