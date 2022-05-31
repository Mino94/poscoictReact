import { useState } from "react";

const Second = ({name, setName}) => {
    return (
        <>
            <p>{`Second : ${name}`}</p>
            <button onClick={()=> {
                console.log("react");
                setName("react");
            }}
            >
                Second name set world
            </button>
        </>
    );
};

export default Second;