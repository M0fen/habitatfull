import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
//import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
// import realState from "../../public/real-state.jpg";
import logoOriginal from '../../public/logoOriginal.png';
import ParallaxImage from '../components/ParallaxImage';
// Importa GSAP y el plugin TextPlugin
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  //estilos del paralax
  const styles = {
    bgHeader: {
      background: `url=(${logoOriginal}) center center no-repeat`,
      backgroundAttachment: 'fixed',
    },
  };
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  // Registra el plugin TextPlugin con GSAP
  gsap.registerPlugin(TextPlugin);

  // Crea una referencia para el texto que quieres animar
  const text = useRef();

  useLayoutEffect(() => {
    gsap.to(text.current, {
      duration: 2,
      text: () =>
        "Propiedades que te ofrecen <span className='text-gray-900'>más</span> que un espacio",
      textAlign: 'center', // Centra el texto horizontalmente
      fontSize: '3rem', // Establece el tamaño de fuente deseado
      margin: '20 auto', // Establece márgenes automáticos para centrar verticalmente
    });
  }, []);

  return (
    <div className="home">
      <ParallaxImage />
      <div className="home__header" style={styles.bgHeader}>
        <div className="home__headerText">
          {/* Usa el atributo style para cambiar el tamaño y el color de las letras */}
          {/* Usa el breakpoint md: para cambiar el ancho y el tamaño del texto en pantallas medianas o mayores */}
          <h1
            ref={text}
            style={{ fontSize: '5rem', color: 'gray' }}
            className="w-50 md:w-75 md:text-6xl"
          ></h1>
        </div>
        <div className="mx-auto w-10">
          <button
            onClick={() => {
              // Agrega la lógica que desees ejecutar al hacer clic en el botón
              // Por ejemplo, puedes redirigir al usuario a la página de búsqueda.
              // history.push("/search");
            }}
            className="text-xs sm:text-sm font-bold hover:underline bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-900 hover:text-gray-700 transition duration-300 transform hover:scale-105"
          >
            Busquemos tu casa indicada...
          </button>
        </div>
      </div>
      <br />

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                Propiedades Recientes
              </h2>
              <Link
                className="text-sm text-gray-800 hover:underline"
                to={'/search?offer=true'}
              >
                Ver Más Propiedades
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Excelentes propiedades en Renta
              </h2>
              <Link
                className="text-sm text-gray-800 hover:underline"
                to={'/search?type=rent'}
              >
                Ver más propiedades en renta
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                Hermosas propiedades en Venta
              </h2>
              <Link
                className="text-sm text-gray-800 hover:underline"
                to={'/search?type=sale'}
              >
                Ver más propiedades en Venta
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
