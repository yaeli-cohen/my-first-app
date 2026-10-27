import { useState } from "react";

function ProductDescription(){
  const  start="סט של שישה כוסות זכוכית עמידות.";
    const[sentense,setSentense]=useState(false);
    const more=start + "סט זה מספיק רק אם אין לנו אורחים לשבת...";


    return(
        <div>
        <p>{sentense? more:start}</p>
        <button onClick={()=>setSentense(!sentense)}>{sentense? 'show more':'show less'}</button>

    </div>
)}