const productos = [
    {
        "id": 1,
        "Nombre": "Retablos",
        "Descripcion": "Descripción del Producto 1",
        "Imagen": "https://i1.sndcdn.com/artworks-000427032654-6q5sf7-t500x500.jpg",
        "Precio": 1000,
        "TiempoEntrega": "Inmediata",
        "CostoEnvio": 1000,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Envío postal y recogida en tienda",
        "Garantia": "3 meses",
        "Categorias": ["a", "c"],
        "GaleriaImagenes": {
            "Imagen1": "https://i1.sndcdn.com/artworks-000427032654-6q5sf7-t500x500.jpg",
            "Imagen2": "https://i1.sndcdn.com/artworks-000427032654-6q5sf7-t500x500.jpg",
            "Imagen3": "https://i1.sndcdn.com/artworks-000427032654-6q5sf7-t500x500.jpg"
        }
    },
    {
        "id": 2,
        "Nombre": "Producto 2",
        "Descripcion": "Descripción del Producto 2",
        "Imagen": "https://goo.su/hXnf",
        "Precio": 2000,
        "TiempoEntrega": "Inmediata",
        "CostoEnvio": 2000,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Envío postal y recogida en tienda",
        "Garantia": "2 meses",
        "Categorias": ["", ""],
        "GaleriaImagenes": {
            "Imagen1": "https://goo.su/hXnf",
            "Imagen2": "https://goo.su/hXnf",
            "Imagen3": "https://goo.su/hXnf"
        }
    },
    {
        "id": 3,
        "Nombre": "Producto 3",
        "Descripcion": "Descripción del Producto 3",
        "Imagen": "https://i.pinimg.com/736x/cd/d8/5c/cdd85c55640e26468133175ddb381829.jpg",
        "Precio": 3000,
        "TiempoEntrega": "Inmediata",
        "CostoEnvio": 3000,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Envío postal y recogida en tienda",
        "Garantia": "3 meses",
        "Categorias": ["", ""],
        "GaleriaImagenes": {
            "Imagen1": "https://i.pinimg.com/736x/cd/d8/5c/cdd85c55640e26468133175ddb381829.jpg",
            "Imagen2": "https://i.pinimg.com/736x/cd/d8/5c/cdd85c55640e26468133175ddb381829.jpg",
            "Imagen3": "https://i.pinimg.com/736x/cd/d8/5c/cdd85c55640e26468133175ddb381829.jpg"
        }
    },
    {
        "id": 4,
        "Nombre": "Producto 4",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 0,
        "TiempoEntrega": "0 días",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Envío postal y recogida en tienda",
        "Garantia": "",
        "Categorias": ["", ""],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif",
            "Imagen3": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 5,
        "Nombre": "Producto 5",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 0,
        "TiempoEntrega": "0 días",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Envío postal y recogida en tienda",
        "Garantia": "",
        "Categorias": ["", ""],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif",
            "Imagen3": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 6,
        "Nombre": "Producto 6",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 0,
        "TiempoEntrega": "0 días",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Envío postal y recogida en tienda",
        "Garantia": "",
        "Categorias": ["", ""],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 7,
        "Nombre": "Producto 7",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 0,
        "TiempoEntrega": "0 días",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Envío postal y recogida en tienda",
        "Garantia": "",
        "Categorias": ["", ""],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 8,
        "Nombre": "Producto 8",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 0,
        "TiempoEntrega": "0 días",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Envío postal y recogida en tienda",
        "Garantia": "",
        "Categorias": ["", ""],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 9,
        "Nombre": "Producto 9",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 0,
        "TiempoEntrega": "0 días",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Envío postal y recogida en tienda",
        "Garantia": "",
        "Categorias": ["", ""],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 10,
        "Nombre": "Producto 10",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 0,
        "TiempoEntrega": "0 días",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Envío postal y recogida en tienda",
        "Garantia": "",
        "Categorias": ["", ""],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 11,
        "Nombre": "Producto 11",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 0,
        "TiempoEntrega": "0 días",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Envío postal y recogida en tienda",
        "Garantia": "",
        "Categorias": ["", ""],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif"
        }
    },
    {
        "id": 12,
        "Nombre": "Producto 12",
        "Descripcion": "",
        "Imagen": "./Imagenes/NoEncontrado.avif",
        "Precio": 0,
        "TiempoEntrega": "0 días",
        "CostoEnvio": 0,
        "Stock": "Disponible online y en tienda física",
        "OpcionesEntrega": "Envío postal y recogida en tienda",
        "Garantia": "",
        "Categorias": ["", ""],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/NoEncontrado.avif",
            "Imagen2": "./Imagenes/NoEncontrado.avif"
        }
    }
];
