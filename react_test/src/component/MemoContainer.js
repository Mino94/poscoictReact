import { useState, useMemo } from "react";
import PrimaryNumber from "./PrimaryNumber";

const MemoContainer = () => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    const onChangeHandler = (e) => {
        const eventNumber = Number(e.target.value);
        setNumber(eventNumber);
    };

    const getPrimaryNumber = (number) => {
        console.log(number);
        let primaryNumber = 0;

        for(let i = 2; i<number; i++){
            let isPrimary = true;
            for(let j = 2; j<i; j++){
                if(i % j === 0){
                    isPrimary = false;
                    break;
                }
            }
            if (isPrimary) primaryNumber++;
        }
        return primaryNumber;
    };

    const primaryNumber = useMemo(() => getPrimaryNumber(number), [number]);

    return(
        <div>
            <p>{count}</p>
            <button 
                    onClick={()=>{
                        setCount(count + 1);
                    }}
            >
                 +
            </button>
            <hr></hr>
            <input type={"number"} value={number} onChange={onChangeHandler}></input>
            <PrimaryNumber number={primaryNumber}></PrimaryNumber>
        </div>
    );
};

export default MemoContainer;