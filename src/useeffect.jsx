import { useEffect }from "react";
import { useState } from "react";
function UseEffect(){
    const[resourceType, setResourceType]=useState('post')
    useEffect(()=>{
        console.log("resource type changed")
    },[resourceType])
    return(
        <div>
            <button onClick={()=>{setResourceType("post")}}>post</button>
            <button onClick={()=>{setResourceType("users")}}>users</button>
            <button onClick={()=>{setResourceType("comments")}}>comments</button><br />
            <h1>{resourceType}</h1>

        </div>
    )

}
export default UseEffect