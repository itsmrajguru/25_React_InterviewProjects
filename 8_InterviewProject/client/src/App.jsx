import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './pages/auth'
import ScrumBoardPage from './pages/scrum-board'
import TasksPage from './pages/tasks'
import NotFoundPage from './pages/NotFoundPage'
import CommonLayout from './components/common-layout'
import { Toaster } from './components/ui/sonner'

function App() {

  return (
    <>
      {/*adding Routes */}
      <Routes>
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/tasks" element={<CommonLayout />}>
          <Route path="list" element={<TasksPage />} />
          <Route path="scrum-board" element={<ScrumBoardPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>

      <Toaster />
    </>
  )
}

export default App
