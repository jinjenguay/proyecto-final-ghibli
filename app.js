const main = document.getElementById('main');
const url = 'https://ghibliapi.herokuapp.com/films';

fetch(url)
  .then(resp => resp.json())
  .then(data => infoGhibli(data))
  .catch(err => console.log(err))



  const infoGhibli = (arr) => {
    let str = '';
    for(let i = 0; i < arr.length; i++){
      const nombre = arr[i].title;
      const imagen = arr[i].image;
      const tituloOriginal = arr[i].original_title;
      const fechaEstreno = arr[i].release_date;
      const personajes = arr[i].people;
      str = str + 
      `<div class="card">
        <figure class="containerImagen">
          <img src="${imagen}" alt="${nombre}" width= "200px">
        </figure>
        <div class="info">
          <p class= "categorias">Título: </p>
          <p class= "valorCategoria">${nombre}</p>
          <p class= "categorias">Original: </p>
          <p class= "valorCategoria">${tituloOriginal}</p>
          <p class= "categorias">Año: </p>
          <p class= "valorCategoria">${fechaEstreno}</p>
          <a href= "./personajes.html" class="categoria-personajes">Todos los personajes</a>
        </div>
      </div> 
      `
    }
    main.innerHTML = str;
  }

  
  const mainPersonajes = document.getElementById('Personajes');
  const urlPersonajes = 'https://ghibliapi.herokuapp.com/people';


  fetch(urlPersonajes)
  .then(resp => resp.json())
  .then(data => infoPersonajes(data))
  .catch(err => console.log(err))
  
    const infoPersonajes = (arr) => {
      let str = '';
      for(let i = 0; i < arr.length; i++){
        const nombrePersonaje = arr[i].name;
        const genero = arr[i].gender;
        const edad = arr[i].age;
        str = str + 
        `<div class="cardPersonajes">
        <div class="infoPersonaje">

          <p class="categorias">Nombre: </p>
          <p>${nombrePersonaje}</p>
          <p class="categorias">Género: 
          </p>${genero}</p>
          <p class="categorias">Edad: </p>
          <p>${edad}</p>

        </div>
        </div>
        `
      }
      mainPersonajes.innerHTML = str;
    }