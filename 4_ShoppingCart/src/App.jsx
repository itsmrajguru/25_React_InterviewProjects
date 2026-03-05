import './App.css'
import { Routes,Route } from 'react-router-dom'

import MainLayoutComponent from "./pages/layout/mainLayout";
import ProductListComponent from './pages/productList'
import ProductDetailsComponent from './pages/productDetails'
import CartListComponent from './pages/cartList'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
      <h1 className="text-6xl font-extrabold">Shoppping Cart Website</h1>

      {/* //Added routes */}

    <Routes>
      <Route path='/' element={<MainLayoutComponent/>}>
        <Route path='products' element={<ProductListComponent/>}/>
        <Route path='product-details/:id' element={<ProductDetailsComponent/>}   />
        <Route path='cart' element={<CartListComponent/>}   />

        {/* Added 404 Page Route */}
        <Route path='*' element={<NotFoundPage/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
