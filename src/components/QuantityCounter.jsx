import { useState } from "react";


function Counter(){
const [count,setCount]=useState(1);
const price =25;

return <div>
   
    <button onClick={()=>setCount(count-1) } disabled={count <= 1}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
 <p>סה"כ {price*count} שח</p>
    </div>
}

export default Counter;