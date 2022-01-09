import { useEffect } from "react"

export default function Post(){
    useEffect(()=>{
        console.log(localStorage.getItem("post"))
    },[])
    return <div>
        LOL
    </div>
}

