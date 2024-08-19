async function codigoBin(event) {
    event.preventDefault()
    const codigo = document.getElementById("codigo").value
    const apiURL = `https://data.handyapi.com/bin/${codigo}`
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        if (data.Status == 'NOT FOUND') {
            document.getElementById("error").style.display = "block"
            document.getElementById("error").innerText =
                "Código BIN no encontrado"
            throw new
                Error("Error: " + response.status + " " + response.statusText)
            console.log(response)
        } else {
            console.log(data)
            if (data.Scheme == 'MASTERCARD') {
                const img = document.querySelector("img")
                img.src = "./Imagenes/mastercard.png"
            } else {
                const img = document.querySelector("img")
                img.src = "./Imagenes/visa.png"

            }
            document.getElementById("tipoTarjeta").textContent = data.Scheme
            document.getElementById("tipo").textContent = data.Type
            document.getElementById("nivel").textContent = data.CardTier
            document.getElementById("error").style.display = "block"
            document.getElementById("error").innerText = ""

    if (localStorage.getItem('MedioDePago')) {
       var cart=JSON.parse(localStorage.getItem('MedioDePago'))
       let cartItem = {
        medio: data.Scheme, 
        costo:cart.costo,
        totalPagar:cart.totalPagar
    }


       
        localStorage.setItem('MedioDePago', JSON.stringify(cartItem))
        //Notificar Guardar
        console.log(JSON.parse(localStorage.getItem('MedioDePago')))
       
    }else{
      localStorage.setItem('MedioDePago',JSON.stringify(cartItem))  
    } 
    $.notify("Compra Realizada con exitó", "warn");
        }


    } catch (error) {
        console.log("Error: ", error)
    }

}