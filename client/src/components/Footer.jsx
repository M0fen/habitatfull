import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logoOriginal from '../../public/logoOriginal.png';
export default function Footer() {
  return (
    // Usa la clase bg-gray-900 para cambiar el color del fondo a un gris muy oscuro y vibrante
    <footer className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto p-2 flex flex-wrap justify-between items-center">
        <div>
            <img className='w-40 ' src={logoOriginal} alt="Logo Habitat"  />
            <span className="text-white mr-2">Propiedad Raíz</span>
          <p className="text-white mt-2">Agentes inmobiliarios con ágilidad en procesos de propiedad raíz.</p>
        </div>
        <div className="flex items-center gap-4">
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link to="/" className="text-white hover:underline text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:underline text-white">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <a href="https://web.facebook.com/habitatpropiedadraiz" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="inline text-white hover:text-slate-500 text-2xl" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="ml-2">
              <FaTwitter className="inline text-white hover:text-slate-500 text-2xl" />
            </a>
            <a href="https://www.instagram.com/habitat.propiedadraiz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="ml-2">
              <FaInstagram className="inline text-white hover:text-slate-500 text-2xl" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="ml-2">
              <FaWhatsapp className="inline text-white hover:text-slate-500 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}