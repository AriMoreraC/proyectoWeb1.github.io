async function codigoBin(event) {
    event.preventDefault();
    const codigo = document.getElementById("codigo").value;
    const apiURL = `https://data.handyapi.com/bin/${codigo}`;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        if (data.Status === 'NOT FOUND') {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerText = "Código BIN no encontrado";
            throw new Error("Error: " + response.status + " " + response.statusText);
        } else {
            console.log(data);
            const img = document.querySelector("img");
            if (data.Scheme === 'MASTERCARD') {
                img.src = "./Imagenes/mastercard.png";
            } else {
                img.src = "./Imagenes/visa.png";
            }
            document.getElementById("tipoTarjeta").textContent = data.Scheme;
            document.getElementById("tipo").textContent = data.Type;
            document.getElementById("nivel").textContent = data.CardTier;
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerText = "";

            let cartItem;
            if (localStorage.getItem('MedioDePago')) {
                const cart = JSON.parse(localStorage.getItem('MedioDePago'));
                cartItem = {
                    medio: data.Scheme,
                    tipoEnvio:cart.tipoEnvio,
                    costo: cart.costo,
                    totalPagar: cart.totalPagar
                };
            } else {
                cartItem = {
                    medio: data.Scheme,
                    tipoEnvio:"",
                    costo: 0, // Define a default value
                    totalPagar: 0 // Define a default value
                };
            }
            localStorage.setItem('MedioDePago', JSON.stringify(cartItem));
            // Notificar Guardar
            console.log(JSON.parse(localStorage.getItem('MedioDePago')));

            $.notify("Compra Realizada con éxito", "warn");
            // Deshabilitar botones para que no "pague" otra vez o retroceda
            document.getElementById("btnPagarCompra").disabled = true;
            document.getElementById("compra").removeAttribute("href"); //Pestaña 1
            document.getElementById("prev").removeAttribute("href"); // Flecha de "previo"
            document.getElementById("procesoCompra").removeAttribute("href");
            document.getElementById("factura").classList.remove("disabled");
            document.getElementById("next").classList.remove("disabled");
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}

// Mostrar el total en la parte de Pago
document.addEventListener("DOMContentLoaded", function() {
    // Recuperar el estado del checkbox desde localStorage
    var checkboxState = localStorage.getItem("checkboxState");
    var total = 0;
    var costoTotalEnvio = 0;
    var cart = JSON.parse(localStorage.getItem('compra'));
    if (cart) {
        cart.forEach(function(item) {
            var precio = parseFloat(item.precio);
            var cantidad = parseInt(item.cantidad);
            total += precio * cantidad;
            costoTotalEnvio += parseFloat(item.costo);
        });
    }
    if (checkboxState === 'true') {
        total += costoTotalEnvio;
    } 
    $('#mostrar-total').text("¢" + total.toFixed(2));
});

$(document).ready(function() {
    // Guardar el estado del checkbox en localStorage cuando cambia
    $('flexCheckChecked').on('change', function() {
        localStorage.setItem("checkboxState", this.checked);
    });
});