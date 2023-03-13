import './itemListContainer.scss';
import { useState, useEffect } from 'react';

const BUILD_DATA = [
  {
    id: 1,
    name: "Nissan",
    descripction: "blanco",
    price: 3000,
    img: "https://previews.123rf.com/images/rawpixel/rawpixel1711/rawpixel171105800/90620480-ilustraci%C3%B3n-de-un-auto-blanco.jpg"
  },
  {
    id: 2,
    name: "Mitsubishi ",
    descripction: "verde",
    price: 5000,
    img: "https://autotest.com.ar/wp-content/uploads/2022/01/MITSUBISHI-ECLIPSE-RAPIDO-Y-FURISOSO-FRENTE.jpg"
  },
  {  
    id: 3,
    name: "Nissan",
    descripction: "azul",
    price: 2000,
    img: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2015/03/400637-azul-marino-volvo-v40.jpg"
  },
  {
    id: 4,
    name: "Nissan",
    descripction: "negro",
    price: 6000,
    img: "http://casapellas.com/assets/WhatsApp-Imae-2017-01-28-at-11.37.58-AM-339x240.jpeg"
  },
   
];

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      const solicitarDatos = async () => {
        return await new Promise(resolve => {
          setTimeout(() => {
            resolve(BUILD_DATA);
          }, 2000);
        });
      };
      
      solicitarDatos()
        .then(response => {
          setProductos(response);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    return (
      <header>
        <div >
          <h2 className="item">ItemListContainer</h2>
          {greeting}
  
          {productos.map((el) => (
            <div>
              <img className='imgStock' src={el.img} alt={el.name} />
              <h4>{el.name}</h4>
              <p>{el.descripction}</p>
              <p>Precio: <strong>USD${el.price}</strong></p>
            </div>
          ))}
        </div>
      </header>
    );
  };
  

export default ItemListContainer;
