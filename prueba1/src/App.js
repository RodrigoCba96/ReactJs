import { Navbar } from './components/navbar/Navbar';
import './components/navbar/Navbar.scss';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./components/CartWidget/CartWidget.scss";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Conocenos from "./components/Conocenos/Conocenos";
import Productos from "./components/Productos/Productos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
         <div>
            <Navbar />
            <ItemListContainer />
            <div class="interactua">
              <NavLink
                to="/conocenos"
                className="btn btn-secondary"
              >
                Conocenos
              </NavLink>
              <NavLink
                to="/productos"
                className="btn btn-secondary"
              >
                Productos
              </NavLink>
            </div>
          </div>
        } />

        <Route path='/conocenos' element={
          <div>
            <Navbar />
            <Conocenos />
            <Productos />
          </div>
        } />

        <Route path='/productos/:categotyId' element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
