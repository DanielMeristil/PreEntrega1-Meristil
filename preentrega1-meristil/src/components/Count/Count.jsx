import React, {useState} from "react";

const Count = ({inicial,stock}) => {

const [counter,setCounter] = useState(inicial)

const increment = () => {
    if (counter < stock) {
        setCounter(counter+1)
    }
}
const decrement = () => {
    if(counter >1){
        setCounter(counter-1)
    }
}

    return (
        <div>
            <p> contador: {counter}</p>
            <button onClick={()=>{increment()}}>incrementar</button>
            <button onClick={()=>{decrement()}}>decrementar</button>
        </div>
    )
}
export default Count;


