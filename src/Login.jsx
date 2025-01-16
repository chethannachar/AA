import { useState } from "react";
function Login({onDelete}){
    const[subject,setsubject]=useState("");
    const[attended,setattended]=useState();
    const[held,setheld]=useState();
    const[result,setresult]=useState(null);
    const handle= async (e)=>{
        try{
        const response=await fetch("http://localhost:3000/submit ",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({subject:subject,a:attended,h:held})
        });
    }
    catch(error){
        console.log(error);
    }
    }
    let res;
    function attendence(){
        handle();
        const a=Number(attended);
        const h=Number(held);
        
        
        const percentage = (a / h) * 100;
        setresult(percentage.toFixed(2)+"%"); 
    }
    return(
        <div>
         <div className="gap">   
        <div className="input-form">
        <form onSubmit={handle}> 
            <input type="text" onChange={(e)=>setsubject(e.target.value)} value={subject} placeholder="Subject-Title"></input>
            <input type="number" onChange={(e)=>setattended(e.target.value)}value={attended} placeholder="Classes Attended"></input>
            <input type="number" onChange={(e)=>setheld(e.target.value)}value={held} placeholder="Out Of"></input>
        </form>
        <button onClick={attendence} className="b2">Calculate</button>
        <button  onClick={onDelete} className="bin">✖</button>
        
        <div className="result">
    
        <h2 className="res"><span className="text">Percentage:</span>{result}</h2>
     
        </div>  
        </div>
    </div>    
    </div>
    );
}
export default Login;