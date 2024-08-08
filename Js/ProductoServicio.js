
function detalle(id) {
    window.location.href = `DetalleProductos.html?id=${id}`;
  }
  
  function displayProd(productos) {
    $("#producto-lista").html('')
    productos.forEach((prod) => {
      const cardProd = `
                <div class="col">
              <div class="card shadow-sm text-center">
                  <div class="card-header">
                      <h4 class="card-title">${prod.Nombre}</h4>
                  </div>
                  <img src="${prod.Imagen ? prod.Imagen : './Imagenes/NoEncontrado.avif'}" class="card-img-top" style="max-height:460px;" role="img"  class="img-fluid" 
                      alt="Imagen" />
                  <div class="card-body">
                      <p class="card-title"></p>
                      <h1 class="card-title">&cent;${prod.Precio}</h1>
                      <div class="d-grid gap-2">
                        <button type="button" class="btn btn-outline-dark" onclick="detalle(${prod.id})">Ver Detalle</button>
                        <button type="button" class="btn btn-outline-dark" onclick="comprarProd(this)" data-id="(${prod.id})">Comprar</button>
                      </div>

                  </div>
              </div>
          </div>`
      $("#producto-lista").append(cardProd)
    });
  }


  // Función para mostrar las opciones de filtro por categoría
  function displayCategories() {
    var select = $('#filter');
    var categories = [];
    $.each(productos,function(index,book){
      $.each(book.Categorias, function(index,category){
        if($.inArray(category, categories)===-1){
          categories.push(category)
          //Añadir opcion select
          select.append(`<option value="${category}"> ${category} </option>`)
        }
      })
    })
  
  }
  $(document).ready(function () {
    //Listar Libros
    displayProd(productos)
    //Listar Categorias
    displayCategories()
    $('#filter').change(function () {
      var category=$(this).val()
      var filteredBooks
      if(category==='all'){
        filteredBooks=productos
      }else{
        filteredBooks=productos.filter((function(producto){
          return producto.categorias.includes(category)
        }))
      }
      displayProd(filteredBooks)
    });
  });
  