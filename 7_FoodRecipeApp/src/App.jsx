import './App.css'
import Navbar from './components/Navbar';
import DetailsPage from './pages/DetailsPage';
import FavouritesPage from './pages/FavouritesPage';
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/fav" element={<FavouritesPage />}></Route>
          <Route path="/recipe-item/:id" element={<DetailsPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </div>
  )
}
export default App
