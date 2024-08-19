// async function codigoBin(event) {
//     event.preventDefault()
//     const codigo = document.getElementById("codigo").value
//     const apiURL = `https://data.handyapi.com/bin/${codigo}`
//     try {
//         const response = await fetch(apiURL)
//         const data = await response.json()
//         if (data.Status == 'NOT FOUND') {
//             document.getElementById("error").style.display = "block"
//             document.getElementById("error").innerText =
//                 "Código BIN no encontrado"
//             throw new
//                 Error("Error: " + response.status + " " + response.statusText)
//             console.log(response)
//         } else {
//             console.log(data)
//             if (data.Scheme == 'MASTERCARD') {
//                 const img = document.querySelector("img")
//                 img.src = "./Imagenes/mastercard.png"
//             } else {
//                 const img = document.querySelector("img")
//                 img.src = "./Imagenes/visa.png"

//             }
//             document.getElementById("tipoTarjeta").textContent = data.Scheme
//             document.getElementById("tipo").textContent = data.Type
//             document.getElementById("nivel").textContent = data.CardTier
//             document.getElementById("error").style.display = "block"
//             document.getElementById("error").innerText = ""

//             if (localStorage.getItem('MedioDePago')) {
//             var cart=JSON.parse(localStorage.getItem('MedioDePago'))
//             let cartItem = {
//                 medio: data.Scheme, 
//                 costo:cart.costo,
//                 totalPagar:cart.totalPagar
//                 }
//             localStorage.setItem('MedioDePago', JSON.stringify(cartItem))
//             //Notificar Guardar
//             console.log(JSON.parse(localStorage.getItem('MedioDePago')))

//             } else {
//                 localStorage.setItem('MedioDePago',JSON.stringify(cartItem))  
//             } 
//         $.notify("Compra Realizada con éxito", "warn");
//         }
//     } catch (error) {
//         console.log("Error: ", error)
//     }

// }




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
                    costo: cart.costo,
                    totalPagar: cart.totalPagar
                };
            } else {
                cartItem = {
                    medio: data.Scheme,
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
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}