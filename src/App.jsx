import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Input from './components/Input';
import Err from './components/Err';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import CheckoutUseForm from './components/ChekoutUseForm';

function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Welcome to Parfums"/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="You are in the category: "/>}/>
          <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<CheckoutUseForm/>}/>
          <Route path='*' element={<Err/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
