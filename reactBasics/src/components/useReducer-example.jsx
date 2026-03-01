// import { useState } from "react"

import { useReducer } from "react"


export default function UseReducerExample() {

    //defining Initial Arguments
    const initialState={
        showContent:false,
        changeContent:false
    }

    //Defining diff actions
    const HIDE_TEXT='HIDE_TEXT'
    const SHOW_TEXT='SHOW_TEXT'
    const CHANGE_TEXT='CHANGE_TEXT'

    /* This function is taking all possible functions and
    returning updated states along with the given action */
    function reducer(state,action) {
        switch (action.type) {
            case HIDE_TEXT:
                return{
                    ...state,
                    showContent:false
                }
            
            case SHOW_TEXT:
                return{
                    ...state,
                    showContent:true
                }

            case CHANGE_TEXT:
                return{
                    ...state,
                    changeContent:!state.changeContent
                }
            default:
                return state;
        }
    }

    //useReducer Hook()
    const[state,dispatch]=useReducer(reducer,initialState)
    return(
        <>
        {state?.showContent ? (
            <h3 style={{
                width:'fit-content',
                backgroundColor: state?.changeContent ? "yellow" : "red",
            }}>
            Use Reducer Hook Example</h3>
        ) : null}
            <button onClick={()=>dispatch({type:HIDE_TEXT})}>Hide Content</button>
            <button onClick={()=>dispatch({type:SHOW_TEXT})}>Show Content</button>
            <button onClick={()=>dispatch({type:CHANGE_TEXT})}>Change Text Styles</button>
        </>
    )
}


    // //usesState hook()
    // const [visible, setVisible] = useState(true)

    // function HideContent() {
    //     setVisible(false)
    // }
    // function ShowContent() {
    //     setVisible(true)
    // }
    
    // const textdemo = "Hey Mangesh is a Good Guy"
    // const [text, setText] = useState(textdemo)

    // function ChangeContent() {
    //     setText(prev =>
    //         prev === "Hey Mangesh is a Good Guy"
    //         ? "NO, He is a bad Guy"
    //         : "Hey Mangesh is a Good Guy"
    //     );
    // }

    // return (
    //     <>
    //         {/* Applying state here */}
    //         {visible && <h4 style={
    //             {width:'50vh',
    //             backgroundColor:text==="Hey Mangesh is a Good Guy"?'yellow':'red',
    //             color:text==="Hey Mangesh is a Good Guy"?'black':'black'}
    //         }><b><i>{text}</i></b></h4> }
    //         <br/>

    //     <button onClick={() => HideContent()}>Hide Content</button>
    //         <button onClick={() => ShowContent()}>Show Content</button>
    //         <button onClick={() => ChangeContent()}>Change Text Styles</button>
    //     </>
    // )
