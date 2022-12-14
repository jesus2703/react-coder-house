import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Nabvar from './Componentes/Nabvar/Nabvar';
import Cart from './Componentes/Cart/Cart';
import Checkout from './Componentes/Checkout/Checkout';
import Footer from './Componentes/Footer/Footer';




function App() {
    return(

        

            <BrowserRouter>
                    <div className="App">  
                        <Nabvar />
                            <Routes>
                                <Route path='/' element={<ItemListContainer/>}></Route>
                                <Route path='/categoria/:categoria' element={<ItemListContainer/>}></Route>
                                <Route path='/detalles/:id' element={<ItemDetailContainer/>}></Route>
                                <Route path='/cart' element={<Cart/>}></Route> 
                                <Route path='/checkout' element={<Checkout/>}></Route>

                            </Routes>
                        <Footer/>
                    </div>
            </BrowserRouter>
    
        
    );
    
}

export default App;