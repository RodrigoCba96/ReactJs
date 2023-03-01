
import './Navbar.scss'
import logo from './logotest.png'
import CartWidget from '../CartWidget/CartWidget'
 

export const Navbar = () => {
    return (
        <header>
            <div>
                <h1 class="logo">RUN PLATAFORMA</h1>
                <img  src={logo} alt = 'img' class='imglogo'/>
                <nav class ="nav"> 
                    <a class="e1" href="#">AUTOS </a>
                    <a class="e1" href="#">MOTOS </a>
                    <a class="e1" href="#">BICICLETAS </a>
 
                    <a class="e1" href='#'> <CartWidget /></a>


                </nav>
   
 
 

            </div>
        </header>
    )
}