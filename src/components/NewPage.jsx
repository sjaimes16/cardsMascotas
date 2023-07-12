import React, {useEffect, useState} from 'react'

const NewPage = () => {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('pets');
  const [pagina, setPagina] = useState(10);
  const [currentPage, setCurrentPage] = useState(10);
  const [searchClicked, setSearchClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para el loader

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true); // Mostrar el loader al comenzar la consulta

      const response = await fetch(`https://api.pexels.com/v1/search?query=${searchQuery}&per_page=${pagina}&page=${currentPage}`, {
        headers: {
          Authorization: '44rNBmpRIGqc1Lq6mTdykiVE2ZbP5CXyAgWJpD6G9D6KzKlMHVwCixhB'
        }
      });
      const data = await response.json();
      setTimeout(() => {
        setPhotos(data.photos);
        setIsLoading(false); // Ocultar el loader al finalizar la consulta
      }, 5000);
    };

    if (searchClicked) {
      fetchPhotos();
      setSearchClicked(false);
    }
  }, [searchQuery, pagina, currentPage, searchClicked]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchQuery !== '') {
      setSearchClicked(true);
    }
  };

  const handlePageChange = (e) => {
    setCurrentPage(parseInt(e.target.value));
  };

  return (
    <>
      <div>
        <input type="text" value={searchQuery} onChange={handleSearchChange} />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div className='images'>
        {isLoading ? (
          <div className="loader">Cargando...</div>
        ) : (
          photos.map((photo) => (
            <img className="image" key={photo.id} src={photo.src.medium} alt={photo.photographer} />
          ))
        )}
      </div>
      <div>
        <span>Page: </span>
        <select value={currentPage} onChange={handlePageChange}>
          <option value="1">Página 1</option>
          <option value="2">Página 2</option>
          <option value="3">Página 3</option>          
        </select>
      </div>
    </>
  );
};

export default NewPage