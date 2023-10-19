import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import logoOriginal from '../../public/logoOriginal.png';
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

 
  return (
    // Usa la clase bg-gray-800 para cambiar el color del fondo a un gris oscuro y vibrante
    <header className="bg-gray-900 text-white opacity-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <div>
        <img className='w-40' src={logoOriginal} alt="Logo Habitat" />

          </div>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          </h1>
        </Link>
       
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline text-white ">
              Inicio
            </li>
          </Link>
          {/* Agrega el elemento <li> con el componente <Link> a la lista de elementos <li> */}
          <li>
            <Link to="/search" className="text-white hover:underline">
              Propiedades
            </Link>
          </li>
          <Link to="/about">

            <li className="hidden sm:inline text-gray-100 hover:underline">
              Acerca de
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              // Usa la clase text-white para cambiar el color del texto a blanco
              <li className=" text-slate-700 hover:underline text-white"> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}