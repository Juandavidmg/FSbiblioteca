let libros = [];

// Buscar libros
function buscarLibros() {
    const titleSearch = document.getElementById('title-search').value.toLowerCase();
    const authorSearch = document.getElementById('author-search').value.toLowerCase();
    const temaSearch = document.getElementById('tema').value;
    const ubicacionSearch = document.getElementById('ubi').value;

    const resultados = libros.filter(libro => 
        libro.title.toLowerCase().includes(titleSearch) &&
        libro.author.toLowerCase().includes(authorSearch) &&
        (temaSearch === 'seleccion' || libro.tema === temaSearch) &&
        (ubicacionSearch === 'seleccion' || libro.ubicacion === ubicacionSearch)
    );

    mostrarResultados(resultados);
}

// Mostrar resultados
function mostrarResultados(resultados) {
    const contenedor = document.getElementById('libro-contenedor');
    contenedor.innerHTML = '';
    resultados.forEach(libro => {
        const div = document.createElement('div');
        div.className = 'libro';
        div.innerHTML = `
            <img width="270" height="180" alt="Portada del libro" title="Portada del libro" src="${libro.img}">
            <div class="detalles">
                <p><strong>ISBN:</strong> ${libro.isbn}</p>
                <p><strong>Título:</strong> ${libro.title}</p>
                <p><strong>Autor:</strong> ${libro.author}</p>
                <p><strong>Tema:</strong> ${libro.tema}</p>
                <p><strong>Ubicación física:</strong> ${libro.ubicacion}</p>
                <p><strong>Fecha edición:</strong> ${libro.fechaEdicion}</p>
                <p><strong>Número de páginas:</strong> ${libro.numPaginas}</p>
                <p><strong>Cantidad de ejemplares:</strong> ${libro.cantEjemplares}</p>
                <p><strong>Cantidad de ejemplares disponibles:</strong> ${libro.cantDisponibles}</p>
                <p><strong>Resumen:</strong> ${libro.resumen}</p>
                <p><strong>Tipo de medio del ejemplar:</strong> ${libro.tipoMedio}</p>
                <button type="button" onclick="eliminarLibro('${libro.isbn}')">Eliminar</button>
                <button type="button" onclick="actualizarLibro('${libro.isbn}')">Actualizar</button>
            </div>
        `;
        contenedor.appendChild(div);
    });
}

// Crear libro
function crearLibro() {
    const nuevoLibro = {
        isbn: document.getElementById('isbn').value,
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        tema: document.getElementById('tema').value,
        ubicacion: document.getElementById('ubicacion').value,
        fechaEdicion: document.getElementById('fecha-edicion').value,
        numPaginas: document.getElementById('num-paginas').value,
        cantEjemplares: document.getElementById('cant-ejemplares').value,
        cantDisponibles: document.getElementById('cant-disponibles').value,
        resumen: document.getElementById('resumen').value,
        tipoMedio: document.getElementById('tipo-medio').value,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.vexels.com%2Fpng-svg%2Fvista-previa%2F255333%2Fdibujos-animados-de-libros-escolares&psig=AOvVaw1cPgavMdD2kjVNYbMQne65&ust=1719273163710000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCQpOT18oYDFQAAAAAdAAAAABAE'
    };

    libros.push(nuevoLibro);
    buscarLibros(); 
}

// Eliminar libro
function eliminarLibro(isbn) {
    libros = libros.filter(libro => libro.isbn !== isbn);
    buscarLibros(); }

// Actualizar libro
function actualizarLibro(isbn) {
    const libro = libros.find(libro => libro.isbn === isbn);
    if (libro) {
        document.getElementById('isbn').value = libro.isbn;
        document.getElementById('title').value = libro.title;
        document.getElementById('author').value = libro.author;
        document.getElementById('tema').value = libro.tema;
        document.getElementById('ubicacion').value = libro.ubicacion;
        document.getElementById('fecha-edicion').value = libro.fechaEdicion;
        document.getElementById('num-paginas').value = libro.numPaginas;
        document.getElementById('cant-ejemplares').value = libro.cantEjemplares;
        document.getElementById('cant-disponibles').value = libro.cantDisponibles;
        document.getElementById('resumen').value = libro.resumen;
        document.getElementById('tipo-medio').value = libro.tipoMedio;

        eliminarLibro(isbn); 
    }
}