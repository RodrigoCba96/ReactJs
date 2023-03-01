import { Navbar } from './components/navbar/Navbar';
import './components/navbar/Navbar.scss'
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css" 
import "./components/CartWidget/CartWidget.scss"

 
function App() {
  return (
    <div >
      <Navbar/>

      <ItemListContainer classname='welcome' greeting="Bienvenido"/>
 
      <div class="interactua"> 
      <button class="btn btn-secondary">Apreta aqui</button>
    </div>
    </div>
  )
}

export default App;


 