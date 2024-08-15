const productos = [
    {
        "id": 1,
        "Nombre": "Retablo borde negro",
        "Descripcion": "Retablo de 12x16 pulgadas, con borde negro de 1 cm de buena calidad.",
        "Imagen": "",
        "Precio": 42700,
        "TiempoEntrega": "De una a dos semanas.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Recogida en tienda.",
        "Garantia": "30 años contra defectos de fábrica, no cubre golpes o rayas a partir de una incorrecta manipulación.",
        "Categorias": ["Retablos"],
        "GaleriaImagenes": {
            "Imagen1": "",
            "Imagen2": "",
            "Imagen3": ""
        }
    },
    {
        "id": 2,
        "Nombre": "Retablo bastidor",
        "Descripcion": "Retablo de 16x20 pulgadas, de borde tipo bastidor (borde a los lados de 1.5 cm color negro).",
        "Imagen": "",
        "Precio": 38700,
        "TiempoEntrega": "De una a dos semanas.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Recogida en tienda.",
        "Garantia": "30 años contra defectos de fábrica, no cubre golpes o rayas a partir de una incorrecta manipulación.",
        "Categorias": ["Retablos"],
        "GaleriaImagenes": {
            "Imagen1": "",
            "Imagen2": "",
            "Imagen3": ""
        }
    },
     {
        "id": 3,
        "Nombre": "Impresiones 4x6",
        "Descripcion": "Impresiones de fotografías 4x6 pulgadas en papel fotográfico. Para esto se solicita ir al establecimiento para tomar las fotos o enviar via correo la fotografia que desee con el numero de pedido y sus datos.",
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
        "id": 4,
        "Nombre": "Impresiones 6x8",
        "Descripcion": "Impresiones de fotografías 6x8 pulgadas en papel fotográfico. Para esto se solicita ir al establecimiento para tomar las fotos o enviar vía correo la fotografía que desee con el número de pedido y sus datos.",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 1900,
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física. ",
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
        "Nombre": "Impresiones 8x10",
        "Descripcion": "Impresiones del 8x10 en papel fotográfico, este es el tamaño de impresión más grande que trabajamos. Para esto se solicita ir al establecimiento para tomar las fotos o enviar vía correo la fotografia que desee con el número de pedido y sus datos.",
        "Imagen": "",
        "Precio": 3150,
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Recogida en tienda.",
        "Garantia": "No aplica Garantía",
        "Categorias": ["Impresiones"],
        "GaleriaImagenes": {
            "Imagen1": "",
            "Imagen2": "",
            "Imagen3": ""
        }
    },

    {
        "id": 6,
        "Nombre": "Sesión familiar de 8 fotos",
        "Descripcion": "Sesión fotográfica, ya sea familiar o individual; la cual cuenta de 8 fotos diferentes, 7 fotos de 4x6 y 1 foto de 8x10 pulgadas. Para esto se solicita ir al establecimiento para tomar las fotos.",
        "Imagen": "./Imagenes/OQP6478.jpg",
        "Precio": 17000,
        "TiempoEntrega": "Inmediata",
        "CostoEnvio": 100,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Impresas en tienda y digitales por drive.",
        "Garantia": "No aplica garantía, pero tienen respaldo en el archivo de la empresa.",
        "Categorias": ["Sesiones familiares"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/OQP6522.jpg",
            "Imagen2": "./Imagenes/OQP5183.JPG",
            "Imagen3": "./Imagenes/OQP2790.jpg"
        }
    },
    {
        "id": 7,
        "Nombre": "Sesión familiar de 10 fotos",
        "Descripcion": "Sesión fotográfica, ya sea familiar o individual; la cual cuenta de 10 fotos diferentes, 9 fotos de 4x6 y 1 foto de 8x10 pulgadas. Para esto se solicita ir al establecimiento para tomar las fotos.",
        "Imagen": "./Imagenes/OQP3014.JPG",
        "Precio": 23000,
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio":120,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Impresas en tienda y digitales por drive.",
        "Garantia": "No aplica garantía, pero tienen respaldo en el archivo de la empresa.",
        "Categorias": ["Sesiones familiares"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/OQP5183.JPG",
            "Imagen2": "./Imagenes/OQP2790.jpg",
            "Imagen3": "./Imagenes/OQP3014.JPG"
        }
    },
    {
        "id": 8,
        "Nombre": "Sesión familiar en exteriores, de 30 o más fotos",
        "Descripcion": "Sesión fotográfica en exteriores, ya sea familiar o individual; la cual cuenta de 30 o más fotos diferentes. Sesión fotográfica que cuenta con el precio más elevado debido al traslado del fotografo y su equipo.",
        "Imagen": "./Imagenes/OQP4121.JPG",
        "Precio": 50000,
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Impresas en tienda y digitales por drive.",
        "Garantia": "No aplica garantía, pero tienen respaldo en el archivo de la empresa.",
        "Categorias": ["Sesiones familiares"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/OQP4121.JPG",
            "Imagen2": "./Imagenes/OQP4065.JPG",
            "Imagen3": "./Imagenes/OQP2790.jpg"
        }
    },
    {
        "id": 9,
        "Nombre": "Fotografías comerciales",
        "Descripcion": "Fotografías comerciales, puede cambiarse el precio porque es muy relativo según lo que desee el cliente.",
        "Imagen": "./Imagenes/MG8542.jpg",
        "Precio": 2500,
        "TiempoEntrega": "Depende de las necesidades del cliente y el tipo de producto o servicio.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Se entregan por drive, salvo que el cliente las desee impresas.",
        "Garantia": "No aplica garantía.",
        "Categorias": ["Fotografías comerciales"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/MG8542.jpg",
            "Imagen2": "./Imagenes/MG8689.jpg",
            "Imagen3": "./Imagenes/MG8739.jpg"
        }
    },
    {
        "id": 10,
        "Nombre": "Fotografías de paisajes naturales o urbanos",
        "Descripcion": "Fotografías de paisajes naturales o urbanos, contamos ya con diferentes paisajes capturados en fotos las cuales puede elegir la que guste o puede solicitarlos.",
        "Imagen": "./Imagenes/OQP2399.JPG",
        "Precio": 1040, 
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Envío postal y recogida en tienda.",
        "Garantia": "No aplica garantía.",
        "Categorias": ["Fotografías para la venta"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/OQP1055.JPG",
            "Imagen2": "./Imagenes/OQP8357.JPG",
            "Imagen3": "./Imagenes/OQP8363.JPG"

        }
    },
    {
        "id": 11,
        "Nombre": "Fotografías de objetos cotidianos",
        "Descripcion": "Fotografía del objeto que desee, esta se debe llevar al establecimiento para tomar las fotos y traer el objeto que elija.",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 2080, 
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Envío postal y recogida en tienda.",
        "Garantia": "15 días.",
        "Categorias": ["Fotografías para la venta"],
        "GaleriaImagenes": {            
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif",
            "Imagen3": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 12,
        "Nombre": "Fotografías de especies de animales comunes",
        "Descripcion": "Fotografías de especies de animales comunes. Para esto se solicita ir al establecimiento para tomar las fotos si es su mascota.",
        "Imagen": "./Imagenes/OQP2444.JPG",
        "Precio": 2600, 
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Envío postal y recogida en tienda.",
        "Garantia": "7 días.",
        "Categorias": ["Fotografías para la venta"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/OQP2168.JPG",
            "Imagen2": "./Imagenes/OQP2251.JPG",
            "Imagen3": "./Imagenes/OQP2451.JPG"
        }
    }
];
