import React from "react";
import "./Main2.css";

export default function Main2(props) {
  return (
    <div className="main2-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

// class component example
// class Main2 extends Components{
//     render(){
//         return(
//             <div className="main2-img">
//             <div className="heading">
//               <h1>{props.heading}</h1>
//               <p>{props.text}</p>
//             </div>
//           </div>
//         );
//     }
// }
// export default Main2
