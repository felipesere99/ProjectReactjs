import './App.css';
import  NavBar  from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/ItemList/:categoryId' element={ <ItemListContainer /> } />
            <Route path='/ItemDetail/:itemId' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='*' element={ <Navigate to='/' /> } />
          </Routes>

          <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
