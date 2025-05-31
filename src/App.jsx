import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Input from './components/Input';
import Err from './components/Err';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Input/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Welcome to Parfums"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="You are in the category: "/>}/>
        <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Err/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
