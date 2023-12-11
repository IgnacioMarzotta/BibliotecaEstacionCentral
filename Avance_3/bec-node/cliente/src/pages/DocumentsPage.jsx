import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/authContext";
import { useDocuments } from "../context/documentsContext";
import { useReservations } from "../context/reservationsContext";
import reemplazarTypeYGenre from '../assets/glosario';

import '../assets/styles/catalogo.css';
import { ButtonLink } from "../components/ui";
import { ImFileEmpty } from "react-icons/im";

export function DocumentsPage() {
  const { documents, getDocuments, getFilteredDocuments } = useDocuments();
  const [ cart, setCart ] = useState([]);

  const { user, isAuthenticated } = useAuth();
  const { createReservation } = useReservations();
  const [ active, setActive ] = useState(false);
  const [filter, setFilter] = useState({ type: '', genre: '' });

  
  
  const navigate = useNavigate();

  useEffect(() => {
    getDocuments();
  }, []);

  const filteredDocuments = documents.filter(product => {
    const typeMatch = filter.type === '' || product.type === filter.type;
    const genreMatch = filter.genre === '' || product.genre === filter.genre;
    return typeMatch && genreMatch;
  });

  const resetFilters = () => {
    setFilter({ type: '', genre: '' });
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    // Convierte el valor a un número si es un número
    const numericValue = isNaN(value) ? value : parseInt(value, 10);

    // Actualiza el estado de filtro
    setFilter(prevFilter => ({ ...prevFilter, [name]: numericValue }));
};

  //Funcion para agregar un producto al carrito onClick
  const addToCart = (product) => {
    //Si el producto no esta en el carrito, agregarlo
    if(!cart.some(element => { if (element._id === product._id) {return true;} return false; }))
    {
      setCart([...cart, product]);
      switchButton(product._id);
    }
  };

  //Funcion para cambiar de boton cuando se agrega/elimina elemento del carrito
  const switchButton = (id) => {
    const btn1 = document.getElementById("btn1-"+id)
    const btn2 = document.getElementById("btn2-"+id)
    if(btn1.classList.contains("hidden")) //if simple
    {
      btn1.classList.remove("hidden");
      btn2.classList.add("hidden");
    }
    else
    {
      btn1.classList.add("hidden");
      btn2.classList.remove("hidden");
    }
  }

  //Funcion para eliminar un producto del carrito
  const onDeleteProduct = product => {
		const results = cart.filter(item => item._id !== product._id); //Eliminar item de carrito
    switchButton(product._id);    //Resetear boton
    setCart(results);             //Definir nuevo carrito
	};

  //Funcion para Vaciar el carrito onClick
  const onCleanCart = () => {
    
    cart.forEach((product) => {
      switchButton(product._id);
    });

		setCart([]);
	};

  //Funcion para reservar cada uno de los articulos del carrito
  const handleReserve = async () => {
    try
    {
      if(isAuthenticated)
      {
        cart.forEach(product => {
          //A futuro, agregar para que el usuario tampoco pueda reservar de nuevo si ya tiene ese producto reservado.
          if(product.stock > 0)
          {
            createReservation({user: user.id, document: product});
          }
          else
          {
            navigate("/catalogo");
          }
        });
  
        setCart([]);                // Limpiar el carrito después de reservar.
        navigate("/user/"+user.id); // Ir al perfil una vez se haya reservado los ejemplares
      }
      else
      {
        navigate("/login");   //No esta logeado, volver a login
      }
    }
    catch (error) 
    {
      console.error('Error al reservar:', error);
    }
  }
    
  return (
    <div className="container text-white mt-2">

      <div className="row">
        <div className="col-md-5">
          <select className="form-select filter-select"
              name="type"
              value={filter.type}
              onChange={handleFilterChange}
          >
              <option value="" disabled>Tipo de documento</option>
              <option value="1">Libro</option>
              <option value="2">Pelicula</option>
              <option value="3">Documento Tecnico</option>
              {/* Agrega más opciones según sea necesario */}
          </select>
        </div>
        <div className="col-md-5">
          <select className="form-select filter-select"
              name="genre"
              value={filter.genre}
              onChange={handleFilterChange}
          >
              <option value="" disabled>Genero</option>
              <option value="1">Ficcion</option>
              <option value="2">Accion</option>
              <option value="3">Thriller</option>
              {/* Agrega más opciones según sea necesario */}
          </select>
        </div>

        <div className="col-md-2">
          <button onClick={resetFilters}>
            <svg width="35px" height="35px" viewBox="0 0 21 21">
              <g fill="none" fill-rule="evenodd" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 1 1 0 2.5 2.5)">
                <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-1.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"/>
                <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"/>
              </g>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="cart-summary">
        <header className='header-catalogo'>
          <h1>Productos Disponibles</h1>
          <div className='container-icon'>
            <div className='container-cart-icon' onClick={() => setActive(!active)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='icon-cart'
                filter='invert(1)'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
              </svg>
              <div className='count-products'>
                <span id='contador-productos'>{cart.length}</span>
              </div>
            </div>
            <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
              {cart.length ? (
                <>
                  <div className='row-product'>
                    {cart.map(product => (
                      <div className='cart-product' key={product._id}>
                        <div className='info-cart-product'>
                          <p className='titulo-producto-carrito'>
                            1x {product.title}
                          </p>
                        </div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='icon-close'
                          onClick={() => onDeleteProduct(product)}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                  
                  <button className='btn-clear-all' onClick={onCleanCart}>
                    Vaciar Carrito
                  </button>
                  <button className='btn-clear-all' onClick={handleReserve}>
                    Reservar
                  </button>
                </>
              ) : (
                <p className='cart-empty'>El carrito está vacío</p>
                )}
            </div>
          </div>
        </header>
      </div>

      {filteredDocuments.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No se encontraron documentos con esos parametros.
            </h1>
          </div>
        </div>
      )}

      <div className='container-items row row-cols-1 row-cols-md-3 g-4'>
        {filteredDocuments.map(product => (
          <div className='item' key={product._id}>
            <figure>
              <ButtonLink to={`/document/${product._id}`}><img src={product.img} alt={product.nameProduct} /></ButtonLink>
            </figure>
            <div className='info-product'>
              <h2>{product.title}</h2>
              <h5>{product.author} ({product.year})</h5>
              <h6>Tipo: {product.type}, Genero: {product.genre}</h6>
              <p className='stock'>STOCK: {product.stock}</p>
              <button id={"btn1-"+product._id} onClick={() => addToCart(product)}>
                Agregar al carrito
              </button>
              <button id={"btn2-"+product._id} disabled className="hidden">
                Agregado!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}