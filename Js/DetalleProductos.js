$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const IdProducto = urlParams.get("id");

    if (IdProducto) {
      const producto=productos.find((p)=>p.id==IdProducto)
      if(IdProducto){
        $("#Nombre").text(producto.Nombre)
        $("#Descripcion").html("<b>Descripción: </b>" + producto.Descripcion)
        $("#Precio").html("<b>Precio: </b>₡ " + producto.Precio)
        $("#Imagen").attr("src", producto.Imagen?producto.Imagen:'./Imagenes/NoEncontrado.avif')
        $("#TiempoEntrega").html("<b>Tiempo de entrega: </b>₡ " + producto.TiempoEntrega)
        $("#CostoEnvio").html("<b>Costo del envío: </b>₡ " + producto.CostoEnvio)
        $("#Stock").html("<b>Stock: </b>" + producto.Stock)
        $("#OpcionesEntrega").html("<b>Opciones de entrega: </b>" + producto.OpcionesEntrega)
        $("#Garantia").html("<b>Garantía: </b>" + producto.Garantia)
        $("#Imagen1").attr("src", producto.GaleriaImagenes.Imagen1)
        $("#Imagen2").attr("src", producto.GaleriaImagenes.Imagen2)
        $("#Imagen3").attr("src", producto.GaleriaImagenes.Imagen3)
        // if (producto.Categorias && producto.Categorias.length > 0) {
        const categoriasHtml = producto.Categorias.filter(categoria => categoria).join(", ");
        $("#Categorias").html("<b>Categorías: </b>" + categoriasHtml);
        // }
      }
    }
  });



