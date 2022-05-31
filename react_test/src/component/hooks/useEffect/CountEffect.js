import { useEffect, useState  } from "react";

const CountEffect = () =>{
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");

    // useEffect(()=>{
    //     console.log("없음", count);
    // });

    // useEffect(()=>{ 첫 렌더링에만 호출하기
    //     console.log("[]", count);
    // }, []);
    
    // useEffect(()=>{
    //     console.log("[count]", count);
    // }, [count]);

    useEffect(()=>{
        console.log("[name]", name);
    }, [name]);
    useEffect(()=>{
        console.log("[name, count]", name + " : " +count);
    }, [name, count]);

    return(
        <div>
            <p>{count}</p>
            <button onClick={()=> setCount(count+1)}>+</button>
            <hr></hr>

            <input onChange={(e)=> setName(e.target.value)} />
        </div>
    );
};

export default CountEffect;