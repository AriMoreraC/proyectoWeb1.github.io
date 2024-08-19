$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const IdProducto = urlParams.get("id");
  
    if (IdProducto) {
        const producto = productos.find((p) => p.id == IdProducto);
        if (producto) {
            $("#Nombre").text(producto.Nombre);
            $("#Descripcion").html("<b>Descripción: </b>" + producto.Descripcion);
            $("#Precio").html("<b>Precio: </b>₡ " + producto.Precio);
            $("#Imagen").attr("src", producto.Imagen ? producto.Imagen : './Imagenes/NoEncontrado.avif');
            $("#TiempoEntrega").html("<b>Tiempo de entrega: </b>₡ " + producto.TiempoEntrega);
            $("#CostoEnvio").html("<b>Costo del envío: </b>₡ " + producto.CostoEnvio);
            $("#Stock").html("<b>Stock: </b>" + producto.Stock);
            $("#OpcionesEntrega").html("<b>Opciones de entrega: </b>" + producto.OpcionesEntrega);
            $("#Garantia").html("<b>Garantía: </b>" + producto.Garantia);
            $("#Imagen1").attr("src", producto.GaleriaImagenes.Imagen1)
            $("#Imagen2").attr("src", producto.GaleriaImagenes.Imagen2)
            $("#Imagen3").attr("src", producto.GaleriaImagenes.Imagen3)
            // if (producto.Categorias && producto.Categorias.length > 0) {
            const categoriasHtml = producto.Categorias.filter(categoria => categoria).join(", ");
            $("#Categorias").html("<b>Categorías: </b>" + categoriasHtml);
            // }
            // Asignar el id del producto al botón
            $("#btnAgregarAlCarrito").attr("data-id", producto.id);
        } else {
          window.location.href = `ProductosServicios.html`;
          alert("Producto no encontrado.");
        }
    } else {
      window.location.href = `ProductosServicios.html`;
      alert("Producto no especificado.");
    }
  
    // Función para añadir al carrito en el botón
    $("#btnAgregarAlCarrito").on("click", function () {
        let id = $(this).attr("data-id");
        addToCart(id);
    });
  });
  
// Añadir al carrito
function addToCart(id) {
    const producto = productos.find((p) => p.id == id);
    if (!producto) return;
    let cartItem = {
        id: producto.id,
        nombre: producto.Nombre,
        precio: parseFloat(producto.Precio),
        cantidad: 1,
        subTotal: parseFloat(producto.Precio)
    };
    let cartArray = JSON.parse(localStorage.getItem('compra')) || [];
    let seleccion = cartArray.findIndex((prod) => prod.id == id);
    if (seleccion != -1) {
        cartArray[seleccion].cantidad += 1;
        cartArray[seleccion].subTotal = cartArray[seleccion].precio * cartArray[seleccion].cantidad;
    } else {
        cartArray.push(cartItem);
    }
    localStorage.setItem('compra', JSON.stringify(cartArray));
    $.notify("Producto o Servicio agregado: " + producto.Nombre, "success");
  }