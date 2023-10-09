import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-200 shadow-md">
      <div className="container mx-auto p-2 flex flex-wrap justify-between items-center">
        <div>
          <h1 className="font-bold text-lg sm:text-2xl flex flex-wrap ">
            <span className="text-slate-500">HABITAT</span>
            <span className="text-slate-700">Propiedad Raíz</span>
          </h1>
          <p className="text-slate-700 mt-2">Contacto: info@habitat.com</p>
        </div>
        <div className="flex items-center gap-4">
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link to="/" className="text-slate-700 hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-700 hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="inline text-slate-700 hover:text-slate-500" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="ml-2">
              <FaTwitter className="inline text-slate-700 hover:text-slate-500" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="ml-2">
              <FaInstagram className="inline text-slate-700 hover:text-slate-500" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="ml-2">
              <FaWhatsapp className="inline text-slate-700 hover:text-slate-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}