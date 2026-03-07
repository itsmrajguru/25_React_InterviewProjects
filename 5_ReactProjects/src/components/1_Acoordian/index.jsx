import { useState } from "react";
import data from "./data";
import './styles.css'

function AccordianComponent() {

    const [selected, setSelected] = useState(null)

    function handleSingleClick(getCurrentId) {
        setSelected(getCurrentId===selected?null:getCurrentId)
        console.log(getCurrentId)
    }
    return (
        <div>
            <h2>Accordian Project</h2>
            {/* Importing Data to Display  in the UI */}
            {
                data && data?.length > 0
                    ? data.map((dataItem) => (
                            <div className="item">
                                <h3 onClick={() => handleSingleClick(dataItem.id)}>
                                    {dataItem.question}
                                    <span><button>+</button></span>
                                </h3>

                            {selected === dataItem.id && (
                                <div className="answer">
                                    <h5>{dataItem.answer}</h5>
                                </div>
                            )}
                            </div>
                    ))
                    : <h2>No Data Found</h2>
            }
        </div>
    );
}

export default AccordianComponent;





















// import data from "./data";

// function AccordianComponent() {

//     function handleSingleSelection(getcurrentItem){
//         console.log(getcurrentItem);
// }
//     return (
//         <div>
//             <h1>1_ Accordian Component</h1>
//             {
//                 // Calling Data in the Accordian Component

//                 data && data?.length>0
//                 ?data.map(dataItem=>
//                     <div className="item">
//                         <h3  onClick={()=>handleSingleSelection(dataItem.id)} className="title">{dataItem.question}
//                         <span><button >+</button></span>
//                         </h3>
//                     </div>
//                 )
//                 :<h1>No Data Found</h1>
//             }
//         </div>
//     );
// }

// export default AccordianComponent;


































































//single selection
//multiple selection

// import { useState } from "react";
// import data from "./data";
// import "./styles.css";

// export default function Accordian() {
//   const [selected, setSelected] = useState(null);
//   const [enableMultiSelection, setEnableMultiSelection] = useState(false);
//   const [multiple, setMultiple] = useState([]);

//   function handleSingleSelection(getCurrentId) {
//     setSelected(getCurrentId === selected ? null : getCurrentId);
//   }

//   function handleMultiSelection(getCurrentId) {
//     let cpyMutiple = [...multiple];
//     const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

//     console.log(findIndexOfCurrentId);
//     if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
//     else cpyMutiple.splice(findIndexOfCurrentId, 1);

//     setMultiple(cpyMutiple);
//   }

//   console.log(selected, multiple);
//   return (
//     <div className="acc-wrapper">
//       <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
//         Enable Multi Selection
//       </button>
//       <div className="accordian">
//         {data && data.length > 0 ? (
//           data.map((dataItem) => (
//             <div className="item">
//               <div
//                 onClick={
//                   enableMultiSelection
//                     ? () => handleMultiSelection(dataItem.id)
//                     : () => handleSingleSelection(dataItem.id)
//                 }
//                 className="title"
//               >
//                 <h3>{dataItem.question}</h3>
//                 <span>+</span>
//               </div>
//               {enableMultiSelection
//                 ? multiple.indexOf(dataItem.id) !== -1 && (
//                     <div className="acc-content ">{dataItem.answer}</div>
//                   )
//                 : selected === dataItem.id && (
//                     <div className="acc-content ">{dataItem.answer}</div>
//                   )}
//               {/* {selected === dataItem.id ||
//               multiple.indexOf(dataItem.id) !== -1 ? (
//                 <div className="content">{dataItem.answer}</div>
//               ) : null} */}
//             </div>
//           ))
//         ) : (
//           <div>No data found !</div>
//         )}
//       </div>
//     </div>
//   );
// }