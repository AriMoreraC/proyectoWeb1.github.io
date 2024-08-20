function addToCart(element) {
	let ProdPadre =$(element).closest('div.item')
	let id =element.dataset.id
	//Símbolo
	let precio=$(ProdPadre).find('.item-precio').text()
	precio= precio.substring(1,precio.length)
	let nombre=$(ProdPadre).find('.item-nombre').text()
	let costo=$(ProdPadre).find('.item-costo').text()
	costo=costo.substring(1,costo.length)
//Elemento del carrito
		//{3,'Nombre'} {id:3,name:'Nombre'} 
		let cartItem={
			id,
			nombre,
			precio,
			cantidad:1,
			costo,
			subTotal:precio*1
		}
	//Obtener carrito actual
	let cartArray=new Array()
	if(localStorage.getItem('compra')){
		cartArray=JSON.parse(localStorage.getItem('compra'))
	}
	if(cartArray.length>0){
		let seleccion=cartArray.findIndex((prod)=>prod.id==id)

		if(seleccion != -1){
			cartArray[seleccion].cantidad+=1
			//Subtotal

		}else{
			cartArray.push(cartItem)
		}
	}else{
		cartArray.push(cartItem)
	}
	
	localStorage.setItem('compra',JSON.stringify(cartArray))
	//Notificar Guardar
	console.log(JSON.parse(localStorage.getItem('compra')))
	$.notify("Producto o Servicio agregado: "+nombre,"sucess")
}
function removeCartItem(id) {
	var cartArray = JSON.parse(localStorage.getItem('compra'))
	if (cartArray) {
		let index = cartArray.findIndex((obj) => obj.id == id);
		cartArray.splice(index,1)
	}
	//Guardar
	localStorage.setItem('compra',  JSON.stringify(cartArray))
	$.notify("Producto o Servicio Eliminado de la Compra", "warn");
	showDetailShop()
} 

function updateCartItemQty(element) {
	
	var id = element.dataset.id
	var quantity=element.value
	var cartArray = JSON.parse(localStorage.getItem('compra'))
	if(quantity==0 && quantity.trim()!=''){
		$('#exampleModal').modal('show');
		$('#aceptar').off('click').on('click', function()  {
	if (cartArray) {
		let index = cartArray.findIndex((obj) => obj.id == id);
		cartArray.splice(index,1)
		localStorage.setItem('compra',  JSON.stringify(cartArray))
		showDetailShop(element)
		$.notify("Producto o Servicio Eliminado de la Compra", "warn");

	}		
		})
	}else{
	if (cartArray) {
		let itemIndex = cartArray.findIndex((obj) => obj.id == id);
		cartArray[itemIndex].cantidad=quantity
		//Subtotal
		
	}		
	}

	//Guardar
	localStorage.setItem('compra',  JSON.stringify(cartArray))
	showDetailShop(element)
} 
 

 function emptyCart() {
	if (localStorage.getItem('compra')) {
		localStorage.removeItem('compra');
		showDetailShop()
	}
}
function showDetailShop() {
	var cartRowHTML = "";
	var itemCount = 0;
	var total = 0;
	var TipoEnvio="";
	var costoTotalEnvio=0;
	var precio = 0;
	var quantity = 0;
	var subTotal = 0;
	var cart = JSON.parse(localStorage.getItem('compra'))
	if (cart) {
		itemCount = cart.length;

		cart.forEach(function(item) {
		
			precio = parseFloat(item.precio) | 0;
			quantity = parseInt(item.cantidad) | 0;
			costoTotalEnvio += parseFloat(item.costo) | 0;
			subTotal = precio * quantity

			cartRowHTML += `<div class="row mb-4 d-flex justify-content-between align-items-center">
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <h6 class="text-muted item-nombre">${item.nombre}</h6>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">

                          <input min="0" name="quantity" value="${item.cantidad}" type="number" onChange="updateCartItemQty(this)"
                            class="form-control form-control-sm quantity" data-id="${item.id}" />

                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0 item-precio">&cent; ${item.precio}</h6>
                        </div>
                        
						<div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0 item-subtotal">&cent;${subTotal.toFixed(2)}</h6>
                        </div>
						<div class="col-md-1 col-lg-1 col-xl-1 ">
                          <button type="button" class="btn btn-secondary"><i class="bi bi-trash3"" onclick="removeCartItem(${item.id})"></i></button>
                        </div>
                      </div>
                      <hr class="my-4">`;

			total += subTotal;
		});		
		document.getElementById('flexCheckChecked').addEventListener('change', function() { 
			if (this.checked) {
	costoTotalEnvio=costoTotalEnvio;
				TipoEnvio="Envío Postal"
		
				$('#total-costo').text("¢" + costoTotalEnvio.toFixed(2))

				
			} else {
					costoTotalEnvio=0;
				TipoEnvio="Recogida en Tienda"

					$('#total-costo').text("¢" + costoTotalEnvio.toFixed(2))		

			}
				total+=costoTotalEnvio;
			$('#total-compra').text("¢" + total.toFixed(2));

			try{

			
			let cartItem = {
				medio: "", 
				tipoEnvio:TipoEnvio,
				costo:costoTotalEnvio,
				totalPagar:total
			}

           localStorage.setItem('MedioDePago',JSON.stringify(cartItem))  
  
			} catch (error) {
				console.log("Error: ", error)
			}

			 });
		
	}
	$('#total-costo').text("¢" + costoTotalEnvio.toFixed(2))
	$('#detalle').html(cartRowHTML);
	$('#total-items').text(itemCount);
	$('#total-compra').text("¢" + total.toFixed(2));
        //console.log(JSON.parse(localStorage.getItem('MedioDePago')))
}
