// ParallaxImage.jsx
import { Parallax } from "react-parallax";
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from "./Header";



const ParallaxImage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <Parallax className=" grid grid-rows-1 "
    bgImage="https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2x"
    strength={400}
    style={{ height: "70vh" }}
    y={[10, -100]}
>

  <div className="parallax   ">
  <Header></Header>
    <br />
    <br />
    <form
          onSubmit={handleSubmit}
          className="bg-white p-3 my-auto mx-auto w-1/3 rounded-lg flex items-center flex justify-between border-2 border-slate-600"
        >
    <input type="text" placeholder="Buscar..." className="bg-white text-gray-600 focus:outline-none w-24 sm:w-64" id=""  onChange={(e) => setSearchTerm(e.target.value)} />
    <button>
            <FaSearch className="text-gray-600" />
          </button>
      </form>
  </div>
</Parallax>
  );
};

export default ParallaxImage;
