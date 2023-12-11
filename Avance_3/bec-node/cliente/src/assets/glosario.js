// Utilidad para buscar en el glosario
const buscarEnGlosario = (valor, glosario) => {
	if (valor in glosario) {
	  return glosario[valor];
	}
	return "Desconocido";
  };
  
  // Función para reemplazar type y genre con el equivalente del glosario
  const reemplazarTypeYGenre = (type, genre) => {
	// Simplemente importa tu glosario aquí
	const glosario = {
	  "types": {
		"1": "Libro",
		"2": "Pelicula",
		"3": "Documento Tecnico"
	  },
	  "genres": {
		"1": "Ciencia Ficción",
		"2": "Novela Romance",
		"4": "Fantasia",
		"7": "Aventura",
		"5": "Novela Historica",
		"6": "Terror",
		"3": "Novela Negra",
		"8": "Poesia",
		"9": "Accion",
		"10": "Comedia"
	  }
	};
  
	// Buscar type y genre en el glosario
	const typeReemplazado = buscarEnGlosario(type, glosario.types);
	const genreReemplazado = buscarEnGlosario(genre, glosario.genres);
  
	return {
	  type: typeReemplazado,
	  genre: genreReemplazado
	};
  };
  
  export default reemplazarTypeYGenre;