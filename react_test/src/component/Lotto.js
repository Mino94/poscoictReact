// import React, { useState } from "react";

// const Lotto = () =>{
//     const [number, setNumber] = useState(1);
//     const [inputNumber, setInputNumber] = useState(1);
//     const [li, setli] = useState([]);

//     const onChangeHandler = (e) => {
//         console.log(e.target);
//         const { value } = e.target;
//         setInputNumber(Number(value));
//     };
    
//     const onClickButton = (min, max) => {
//         min = Math.ceil(1);
//         max = Math.ceil(45);
        

//         for (var i=0; i<6; i++){
//             li.push(Math.floor(Math.random() * (max - min) + min));        console.log(li);
//             console.log(li);
//         }
//         setli(li);
//     };

//     return (
//         <div>
//             {li.map((v, i)=>{
//                 {v}
//             })};
            
//             <button onClick={onClickButton}>추첨</button>
//         </div>
//     );
// };

// export default Lotto;