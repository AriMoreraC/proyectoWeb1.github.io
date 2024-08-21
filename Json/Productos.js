const productos = [
    {
        "id": 1,
        "Nombre": "Retablo borde negro",
        "Descripcion": "Retablo de 12x16 pulgadas, con borde negro de 1 cm de buena calidad.",
        "Imagen": "./Imagenes/Retablo borde2.jpg",
        "Precio": 42700,
        "TiempoEntrega": "De una a dos semanas.",
        "CostoEnvio": 500,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Recogida en tienda.",
        "Garantia": "30 años contra defectos de fábrica, no cubre golpes o rayas a partir de una incorrecta manipulación.",
        "Categorias": ["Retablos"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/Retablo borde.webp",
            "Imagen2": "./Imagenes/Retablo borde2.jpg",
            "Imagen3": "./Imagenes/Retablo borde3.webp"
        },
        "resennas": [
            {
                "rating": 4,
                "comment": "Muy buena calidad de impresión, el proceso fue rápido."
            },
            {
                "rating": 3,
                "comment": "Las fotos salieron bien, pero el tiempo de espera en la tienda fue un poco largo."
            },
            {
                "rating": 1,
                "comment": "No me gustó como quedó el retablo. La calidad es inferior a la que aparentaba."
            }
        ]
    },
     {
        "id": 3,
        "Nombre": "Impresiones 4x6",
        "Descripcion": "Impresiones de fotografías 4x6 pulgadas en papel fotográfico. Para esto se solicita ir al establecimiento para tomar las fotos o enviar via correo la fotografia que desee con el numero de pedido y sus datos.",
        "Imagen": "./Imagenes/impresion3de4x6.webp",
        "Precio": 450,
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 25,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Recogida en tienda.",
        "Garantia": "No aplica garantía.",
        "Categorias": ["Impresiones"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/impresion3de4x6.webp",
            "Imagen2": "./Imagenes/impresion3de6x8.jpg",
            "Imagen3": "./Imagenes/impresion2de6x8.jpg"
        },
        "resennas": [
            {
                "rating": 5,
                "comment": "Excelente servicio! Las impresiones de mis fotos quedaron perfectas y el proceso de entrega fue realmente rápido."
            },
            {
                "rating": 4,
                "comment": "Muy buenas impresiones por un precio accesible. La única sugerencia sería la posibilidad de realizar pedidos en línea para evitar tener que ir al establecimiento."
            },
            {
                "rating": 4,
                "comment": "La calidad de las fotos es buena, pero el tiempo de espera para recibirlas después de enviar el correo fue un poco largo."
            }
        ]
    },
    {
        "id": 4,
        "Nombre": "Impresiones 6x8",
        "Descripcion": "Impresiones de fotografías 6x8 pulgadas en papel fotográfico. Para esto se solicita ir al establecimiento para tomar las fotos o enviar vía correo la fotografía que desee con el número de pedido y sus datos.",
        "Imagen": "./Imagenes/foto6x8.jpg",
        "Precio": 1900,
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 25,
        "Stock": "Disponible online y en tienda física. ",
        "OpcionesEntrega": "Recogida en tienda.",
        "Garantia": "No aplica garantía.",
        "Categorias": ["Impresiones"],
        "GaleriaImagenes": {
            "Imagen2": "./Imagenes/foto6x8.jpg",
            "Imagen1": "./Imagenes/foto26x8.webp",
            "Imagen3": "./Imagenes/impresion2de6x8.jpg"
        },
        "resennas": [
            {
                "rating": 5,
                "comment": "Las impresiones 6x8 son fantásticas. El tamaño es perfecto para enmarcar y la calidad del papel es excelente. Definitivamente volveré a comprar."
            },
            {
                "rating": 4,
                "comment": "Las fotos están muy bien, pero me gustaría que ofrecieran opciones de envío más rápidas para clientes que no puedan recoger en tienda."
            },
            {
                "rating": 2,
                "comment": "La impresión no cumplió mis expectativas en cuanto a color. Espero que mejoren en este aspecto."
            }
        ]
    },  
    {
        "id": 5,
        "Nombre": "Impresiones 8x10",
        "Descripcion": "Impresiones del 8x10 en papel fotográfico, este es el tamaño de impresión más grande que trabajamos. Para esto se solicita ir al establecimiento para tomar las fotos o enviar vía correo la fotografia que desee con el número de pedido y sus datos.",
        "Imagen": "./Imagenes/impresion3de8x10.webp ",
        "Precio": 3150,
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 25,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Recogida en tienda.",
        "Garantia": "No aplica Garantía",
        "Categorias": ["Impresiones"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/impresion2de8x10.webp",
            "Imagen2": "./Imagenes/impresion8x10.webp",
            "Imagen3": "./Imagenes/impresion4de8x10.jpg"
        },
        "resennas": [
            {
                "rating": 5,
                "comment": "Las impresiones 8x10 tienen una calidad impresionante. Perfectas para regalar o decorar mi hogar."
            },
            {
                "rating": 4,
                "comment": "Muy buen producto. La única desventaja es el precio, que es un poco alto, pero la calidad lo justifica."
            },
            {
                "rating": 3,
                "comment": "El tamaño es ideal, pero el servicio de recogida en tienda podría ser más ágil."
            }
        ]
    },
    {
        "id": 2,
        "Nombre": " Retablo fotográfico, de borde tipo bastidor ",
        "Descripcion": "Retablo de 16x20 pulgadas, de borde tipo bastidor (borde a los lados de 1.5 cm color negro).",
        "Imagen": "./Imagenes/Retablo bastidor3.jpeg",
        "Precio": 38700,
        "TiempoEntrega": "De una a dos semanas.",
        "CostoEnvio": 350,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Recogida en tienda.",
        "Garantia": "30 años contra defectos de fábrica, no cubre golpes o rayas a partir de una incorrecta manipulación.",
        "Categorias": ["Retablos"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/Retablo bastidor3.jpeg",
            "Imagen2": "./Imagenes/Retablo bastidor2.png",
            "Imagen3": "./Imagenes/retabloBestidor1.jpg"
        },
        "resennas": [
            {
                "rating": 5,
                "comment": "El retablo de borde tipo bastidor es de excelente calidad. Mi foto se ve increíble y el borde le da un toque elegante."
            },
            {
                "rating": 3,
                "comment": "Muy buena calidad de impresión y el acabado es profesional. Solo que el tiempo de entrega fue más de lo esperado."
            },
            {
                "rating": 2,
                "comment": "No estoy satisfecho con el retablo. La calidad del borde no es la esperada y la entrega tardó más de lo prometido."
            }
        ]
    },
    {
        "id": 6,
        "Nombre": "Sesión de 8 fotos",
        "Descripcion": "Sesión fotográfica, ya sea familiar o individual; la cual cuenta de 8 fotos diferentes, 7 fotos de 4x6 y 1 foto de 8x10 pulgadas. Para esto se solicita ir al establecimiento para tomar las fotos.",
        "Imagen": "./Imagenes/OQP6478.jpg",
        "Precio": 17000,
        "TiempoEntrega": "De una a dos semanas.",
        "CostoEnvio": 100,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Impresas en tienda y digitales por drive.",
        "Garantia": "No aplica garantía, pero tienen respaldo en el archivo de la empresa.",
        "Categorias": ["Sesiones familiares"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/OQP6522.jpg",
            "Imagen2": "./Imagenes/OQP5183.JPG",
            "Imagen3": "./Imagenes/OQP2790.jpg"
        },
        "resennas": [
            {
                "rating": 5,
                "comment": "La sesión de 8 fotos fue fantástica. El fotógrafo hizo un trabajo excelente y las fotos se entregaron a tiempo."
            },
            {
                "rating": 3,
                "comment": "Las fotos son geniales y el precio es razonable. Sin embargo, el proceso para recibir las fotos digitales podría ser más sencillo."
            },
            {
                "rating": 3,
                "comment": "Las fotos están bien, pero el tiempo de espera para la entrega digital fue más largo de lo esperado."
            }
        ]
    },
    {
        "id": 7,
        "Nombre": "Sesión de 10 fotos",
        "Descripcion": "Sesión fotográfica, ya sea familiar o individual; la cual cuenta de 10 fotos diferentes, 9 fotos de 4x6 y 1 foto de 8x10 pulgadas. Para esto se solicita ir al establecimiento para tomar las fotos.",
        "Imagen": "./Imagenes/OQP3014.JPG",
        "Precio": 23000,
        "TiempoEntrega": "De una a dos semanas.",
        "CostoEnvio":120,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Impresas en tienda y digitales por drive.",
        "Garantia": "No aplica garantía, pero tienen respaldo en el archivo de la empresa.",
        "Categorias": ["Sesiones familiares"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/OQP5183.JPG",
            "Imagen2": "./Imagenes/OQP2790.jpg",
            "Imagen3": "./Imagenes/OQP3014.JPG"
        },
        "resennas": [
            {
                "rating": 5,
                "comment": "Excelente sesión fotográfica. Las 10 fotos capturaron cada momento perfecto. Muy satisfecho con el resultado."
            },
            {
                "rating": 4,
                "comment": "Buena calidad y servicio. El precio es justo, aunque el tiempo de espera para las fotos digitales podría mejorar."
            },
            {
                "rating": 3,
                "comment": "Las fotos están bien, pero la experiencia no fue tan rápida como esperaba. La entrega digital tardó más de lo prometido."
            }
        ]
    },
    {
        "id": 8,
        "Nombre": "Sesión en exteriores",
        "Descripcion": "Sesión fotográfica en exteriores, ya sea familiar o individual; la cual cuenta de 30 o más fotos diferentes. Sesión fotográfica que cuenta con el precio más elevado debido al traslado del fotografo y su equipo.",
        "Imagen": "./Imagenes/OQP4121.JPG",
        "Precio": 50000,
        "TiempoEntrega": "De una a dos semanas.",
        "CostoEnvio": 450,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Impresas en tienda y digitales por drive.",
        "Garantia": "No aplica garantía, pero tienen respaldo en el archivo de la empresa.",
        "Categorias": ["Sesiones familiares"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/OQP4121.JPG",
            "Imagen2": "./Imagenes/OQP4065.JPG",
            "Imagen3": "./Imagenes/OQP2790.jpg"
        },
        "resennas": [
            {
                "rating": 5,
                "comment": "Una sesión fotográfica en exteriores excelente. Las fotos salieron maravillosas y el fotógrafo fue muy profesional."
            },
            {
                "rating": 4,
                "comment": "El precio es alto, pero la calidad y la cantidad de fotos hacen que valga la pena. Solo sugiero mejorar el tiempo de entrega."
            },
            {
                "rating": 3,
                "comment": "La sesión fue buena, pero el costo es bastante elevado y la espera para las fotos fue más larga de lo esperado."
            }
        ]
    },
    {
        "id": 9,
        "Nombre": "Fotografías comerciales",
        "Descripcion": "Fotografías comerciales, puede cambiarse el precio porque es muy relativo según lo que desee el cliente.",
        "Imagen": "./Imagenes/MG8542.jpg",
        "Precio": 2500,
        "TiempoEntrega": "Depende de las necesidades del cliente y el tipo de producto o servicio.",
        "CostoEnvio": 150,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Se entregan por drive, salvo que el cliente las desee impresas.",
        "Garantia": "No aplica garantía.",
        "Categorias": ["Fotografías comerciales"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/MG8542.jpg",
            "Imagen2": "./Imagenes/MG8689.jpg",
            "Imagen3": "./Imagenes/MG8739.jpg"
        },
        "resennas": [
            {
                "rating": 5,
                "comment": "Las fotografías comerciales entregadas superaron mis expectativas. El servicio fue profesional y las imágenes de alta calidad."
            },
            {
                "rating": 3,
                "comment": "Buen trabajo en general. El único problema fue la falta de claridad en el proceso de ajuste de precios según las necesidades específicas."
            },
            {
                "rating": 2,
                "comment": "Las fotos están bien, pero el costo final fue más alto de lo esperado. Mejorar la transparencia en los precios sería útil."
            }
        ]
    },
    {
        "id": 10,
        "Nombre": "Fotografías de paisajes naturales o urbanos",
        "Descripcion": "Fotografías de paisajes naturales o urbanos, contamos ya con diferentes paisajes capturados en fotos las cuales puede elegir la que guste o puede solicitarlos.",
        "Imagen": "./Imagenes/OQP2399.JPG",
        "Precio": 1040, 
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 50,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Envío postal y recogida en tienda.",
        "Garantia": "No aplica garantía.",
        "Categorias": ["Fotografías para la venta"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/OQP1055.JPG",
            "Imagen2": "./Imagenes/OQP8357.JPG",
            "Imagen3": "./Imagenes/OQP8363.JPG"
        },
        "resennas": [
            {
                "rating": 5,
                "comment": "Las fotografías de paisajes están impresionantes. La calidad es excelente y la selección de paisajes es muy variada."
            },
            {
                "rating": 4,
                "comment": "Muy buenas fotos a un buen precio. Me gustaría ver más opciones de paisajes disponibles en el futuro."
            },
            {
                "rating": 2,
                "comment": "La calidad de las fotos es buena, pero la entrega fue un poco lenta. La opción de ver las fotos en línea antes de comprar sería útil."
            }
        ]
    },
    {
        "id": 11,
        "Nombre": "Fotografías de objetos cotidianos",
        "Descripcion": "Fotografía del objeto que desee, esta se debe llevar al establecimiento para tomar las fotos y traer el objeto que elija.",
        "Imagen": "./Imagenes/objetos2.jpg",
        "Precio": 2080, 
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 25,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Envío postal y recogida en tienda.",
        "Garantia": "15 días.",
        "Categorias": ["Fotografías para la venta"],
        "GaleriaImagenes": {            
            "Imagen1": "./Imagenes/objeto3.jpg",
            "Imagen2": "./Imagenes/objeto1.jpg",
            "Imagen3": "./Imagenes/objetos2.jpg"
        },
        "resennas": [
            {
                "rating": 5,
                "comment": "El servicio de fotografía de objetos cotidianos es excelente. Las imágenes son claras y bien iluminadas."
            },
            {
                "rating": 4,
                "comment": "Las fotos están bien, aunque el precio es un poco alto para fotografías de objetos. El resultado es satisfactorio."
            },
            {
                "rating": 3,
                "comment": "La calidad es aceptable, pero el proceso de entrega podría mejorar. También sería útil tener más opciones de edición."
            }
        ]
    },
    {
        "id": 12,
        "Nombre": "Fotografías de especies de animales comunes",
        "Descripcion": "Fotografías de especies de animales comunes. Para esto se solicita ir al establecimiento para tomar las fotos si es su mascota.",
        "Imagen": "./Imagenes/OQP2444.JPG",
        "Precio": 2600, 
        "TiempoEntrega": "Inmediata.",
        "CostoEnvio": 25,
        "Stock": "Disponible online y en tienda física.",
        "OpcionesEntrega": "Envío postal y recogida en tienda.",
        "Garantia": "7 días.",
        "Categorias": ["Fotografías para la venta"],
        "GaleriaImagenes": {
            "Imagen1": "./Imagenes/OQP2168.JPG",
            "Imagen2": "./Imagenes/OQP2251.JPG",
            "Imagen3": "./Imagenes/OQP2451.JPG"
        },
        "resennas": [
            {
                "rating": 5,
                "comment": "Las fotos de mi mascota quedaron perfectas. El fotógrafo hizo un gran trabajo capturando la personalidad de mi perrito."
            },
            {
                "rating": 3,
                "comment": "Buen servicio y fotos de calidad. El tiempo de espera para recibir las imágenes fue un poco largo, pero valió la pena."
            },
            {
                "rating": 3,
                "comment": "La calidad de las fotos es buena, pero el proceso para agendar la sesión y recibir las imágenes podría ser más eficiente."
            }
        ]
    }
];

