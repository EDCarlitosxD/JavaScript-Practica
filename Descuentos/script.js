const precioOriginal = 120;
const descuento = 18;






/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});  */

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento
}

function calcularDescuento(){
    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value;
    console.log(price);
     const inputDescuento = document.getElementById("InputDescuento");
    const descuento = inputDescuento.value;
    console.log(descuento);
    
    const precioConDescuento = calcularPrecioConDescuento(price,descuento);

    console.log(precioConDescuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son $"+precioConDescuento;

}


