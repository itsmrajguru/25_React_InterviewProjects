import './App.css'
import ClassBasedComponents from './components/ClassBasedComponents'
import ContextButton from './components/context-example/contextButton'
import ContextText from './components/context-example/contextText'
import { FormComponent } from './components/form'
import FunctionalComponent from './components/FunctionalComponents'
import LoginComponent from './components/login'
import ProductList from './components/products'
import RegisterComponent from './components/register'
import Users from './components/user/index'
import UseReducerExample from './components/useReducer-example'



// const dummyData=[
//     'product 1',
//     'product 2',
//     'product 3',
//     'product 4',
// ]
function App() {
  return (
    <>
      <h1>React By MSR</h1>

      {/* <ClassBasedComponents/> */}

      {/* <FunctionalComponent/> */}

      {/* <ProductList dummyData={dummyData} name="Shambhu"/>  Adding Props */}

      {/* <Users/> */}

      {/* <ContextButton/>
      <ContextText/> */}

      {/* <UseReducerExample/> */}

      {/* <FormComponent/> */}

      <div style={{display:"flex",gap:"50vh"}}> 
        <LoginComponent/>
        <RegisterComponent/>
      </div>

    </>
  )
}

export default App
