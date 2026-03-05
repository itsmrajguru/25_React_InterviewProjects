import { useEffect, useState } from "react"
import classes from "./styles.module.css"
import TodoItem from "./components/todo-item"



function App() {

  //Variable to store the Resonse of the API
  const [todoList, setTodoList] = useState([])
  const [loading, setLoading] = useState(false)
  const [errMsg, setErrMsg] = useState(null)
  const [todoDetail,settodoDetail] = useState(null)
  const [openDialog,setopenDialog] = useState(null)
  
  //fetching API for ALL To-do List
  async function fetchAPI() {
    try {
      setLoading(true)
      const apiRes = await fetch('https://dummyjson.com/todos')
      const apiResult = await apiRes.json()

      console.log(apiResult);

      // setTodoList(apiResult)

      if (apiResult?.todos && apiResult?.todos.length > 0) {
        setTodoList(apiResult?.todos)
        setLoading(false)
        setErrMsg('')
      }
      else {
        setTodoList([])
        setLoading(false)
        setErrMsg('')
      }
    } catch (e) {
      console.log(e);
      setErrMsg("Error while Fetching API ")
    }
  }
  
  //Fetching Details of Current Todo
  async function FetchDetailsOfCurrentTodo(getCurrentTodo) {
    console.log(getCurrentTodo);
    
    try {
      const apiRes=await fetch(`https://dummyjson.com/todos/${getCurrentTodo}`)
      const apiResult=await apiRes.json()

      console.log(apiResult)
      if(apiResult){
        settodoDetail(apiResult)
        setLoading(false)
      }
      else{
        setTodoList(null)
        setErrMsg("ToDo Details not Found")
      }
    } catch (e) {
      console.log(e);
    }
  }
  //call API on page load
  useEffect(() => {
    fetchAPI()
  }, [])



  return (
    <>
      <div className={classes.mainWrapper}>
        <h1 className={classes.headerTitle}>Simple TO-DO list Project by MSR</h1>
        <div className={classes.todoListWrapper}>
          {todoList && todoList.length > 0 ?
              todoList.map(item => (
                // <li>{item?.todo}</li>)):null
                <TodoItem FetchDetailsOfCurrentTodo={FetchDetailsOfCurrentTodo}todo={item} />
              )): null
          }
        </div>
      </div>
    </>
  )
}

export default App
