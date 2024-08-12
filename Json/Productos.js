const productos = [
    {
        "id": 1,
        "Nombre": "Retablo borde negro",
        "Descripcion": "12x16 pulgadas.",
        "Imagen": "https://i1.sndcdn.com/artworks-000427032654-6q5sf7-t500x500.jpg",
        "Precio": 42700,
        "TiempoEntrega": "De una a dos semanas.",
        "CostoEnvio": 1000,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Recogida en tienda.",
        "Garantia": "30 años contra defectos de fábrica, no cubre golpes o rayas a partir de una incorrecta manipulación.",
        "Categorias": ["Retablos"],
        "GaleriaImagenes": {
            "Imagen1": "https://i1.sndcdn.com/artworks-000427032654-6q5sf7-t500x500.jpg",
            "Imagen2": "https://i1.sndcdn.com/artworks-000427032654-6q5sf7-t500x500.jpg",
            "Imagen3": "https://i1.sndcdn.com/artworks-000427032654-6q5sf7-t500x500.jpg"
        }
    },
    {
        "id": 2,
        "Nombre": "Retablo bastidor",
        "Descripcion": "16x20 pulgadas.",
        "Imagen": "https://goo.su/hXnf",
        "Precio": 38700,
        "TiempoEntrega": "De una a dos semanas.",
        "CostoEnvio": 2000,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Recogida en tienda.",
        "Garantia": "30 años contra defectos de fábrica, no cubre golpes o rayas a partir de una incorrecta manipulación.",
        "Categorias": ["Retablos"],
        "GaleriaImagenes": {
            "Imagen1": "https://goo.su/hXnf",
            "Imagen2": "https://goo.su/hXnf",
            "Imagen3": "https://goo.su/hXnf"
        }
    },
    {
        "id": 3,
        "Nombre": "Retablo 15 mm",
        "Descripcion": "20x24 pulgadas",
        "Imagen": "https://i.pinimg.com/736x/cd/d8/5c/cdd85c55640e26468133175ddb381829.jpg",
        "Precio": 85500,
        "TiempoEntrega": "De una a dos semanas.",
        "CostoEnvio": 3000,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Recogida en tienda.",
        "Garantia": "30 años contra defectos de fábrica, no cubre golpes o rayas a partir de una incorrecta manipulación.",
        "Categorias": ["Retablos"],
        "GaleriaImagenes": {
            "Imagen1": "https://i.pinimg.com/736x/cd/d8/5c/cdd85c55640e26468133175ddb381829.jpg",
            "Imagen2": "https://i.pinimg.com/736x/cd/d8/5c/cdd85c55640e26468133175ddb381829.jpg",
            "Imagen3": "https://i.pinimg.com/736x/cd/d8/5c/cdd85c55640e26468133175ddb381829.jpg"
        }
    },
    {
        "id": 4,
        "Nombre": "Impresiones 4x6",
        "Descripcion": "4x6 pulgadas.",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 450,
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Recogida en tienda.",
        "Garantia": "No aplica garantía.",
        "Categorias": ["Impresiones"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif",
            "Imagen3": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 5,
        "Nombre": "Impresiones 6x8",
        "Descripcion": "6x8 pulgadas.",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 1900,
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Recogida en tienda.",
        "Garantia": "No aplica garantía.",
        "Categorias": ["Impresiones"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif",
            "Imagen3": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 6,
        "Nombre": "Sesión familiar de 8 fotos",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 17000,
        "TiempoEntrega": "Inmediata",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Impresas en tienda y digitales por drive.",
        "Garantia": "No aplica garantía, pero tienen respaldo en el archivo de la empresa.",
        "Categorias": ["Sesiones familiares"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 7,
        "Nombre": "Sesión familiar de 10 fotos",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 23000,
        "TiempoEntrega": "Inmediata",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Impresas en tienda y digitales por drive.",
        "Garantia": "No aplica garantía, pero tienen respaldo en el archivo de la empresa.",
        "Categorias": ["Sesiones familiares"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 8,
        "Nombre": "Sesión familiar en exteriores, de 30 o más fotos",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 50000,
        "TiempoEntrega": "Inmediata",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Impresas en tienda y digitales por drive.",
        "Garantia": "No aplica garantía, pero tienen respaldo en el archivo de la empresa.",
        "Categorias": ["Sesiones familiares"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 9, //Puede cambiarse porque es muy relativo según lo quedesee el cliente
        "Nombre": "Fotografías comerciales",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 0,
        "TiempoEntrega": "Depende de las necesidades del cliente y el tipo de producto o servicio.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Se entregan por drive, salvo que el cliente las desee impresas.",
        "Garantia": "No aplica garantía.",
        "Categorias": ["Fotografías comerciales"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 10,
        "Nombre": "Fotografías de paisajes naturales o urbanos",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 2, //Dólares
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Envío postal y recogida en tienda.",
        "Garantia": "No aplica garantía.",
        "Categorias": ["Fotografías para la venta"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 11,
        "Nombre": "Fotografías de objetos cotidianos",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 4, //Dólares
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Envío postal y recogida en tienda",
        "Garantia": "",
        "Categorias": ["Fotografías para la venta"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 12,
        "Nombre": "Fotografías de especies de animales comunes",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 5, //Dólares
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Envío postal y recogida en tienda",
        "Garantia": "",
        "Categorias": ["Fotografías para la venta"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif"
        }
    }
];
