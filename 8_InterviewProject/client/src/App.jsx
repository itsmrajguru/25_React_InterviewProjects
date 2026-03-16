import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './pages/auth'
import ScrumBoardPage from './pages/scrum-board'
import TasksPage from './pages/tasks'
import NotFoundPage from './pages/NotFoundPage'
import CommonLayout from './components/common-layout'

function App() {

  return (
    <>
      {/*adding Routes */}
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="" element={<AuthPage />}></Route>
          <Route path="board" element={<ScrumBoardPage />}></Route>
          <Route path="tasks" element={<TasksPage/>}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
