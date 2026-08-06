import { useState } from "react";





function Practice(){


     const[name,setName]=useState("");
function reset(){


setName("");

}

function suggestion(){

    setName("Alice");
}


    return(<>
    <div className="text-red-700">

        <h3>excersie 3</h3>

     <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} /> 
     <button className="bg-white-200 rounded m-3"  onClick={reset}>reset</button>
        <button  onClick={suggestion}>Example</button>
  

           <p>hello,{name}</p>

    </div>
    
    </>);

}


export default Practice;