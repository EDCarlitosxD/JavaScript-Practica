// Código del cuadrado
console.group("Código cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado mide: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
perimetroCuadrado();

//console.log("El perimetro del cuadrado es :" + perimetroCuadrado + " cm");

function areaCuadrado (lado){
    return lado *lado
} 

//console.log("El area del cuadrado es :" + areaCuadrado + " cm^2");
console.groupEnd();

// Código del triangulo
console.group("Triangulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


/*console.log(
    "Los lados del triangulo son: "
    + ladoTriangulo1
    + " cm"
    + ladoTriangulo2
    + " cm"
    + baseTriangulo
    + " cm");
    */


//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1,lado2,base){
    return lado1+ lado2+ base;
} 
//console.log("El perimetro del triangulo es : " + perimetroTriangulo + " cm");

function areaTriangulo(base,altura){
    return (base*altura)/2;
}
//console.log("El area del triangulo es de : " + areaTriangulo + "cm^2");


console.groupEnd();

// Código del circulo
console.group("Circulos");
// Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es : "+radioCirculo+" cm");

// Diametro
function diametroCirculo (radio){
  return  radio *2
} 
//console.log("El diametro del circulo es : "+ diametroCirculo+" cm");

// PI
const pi = Math.PI;
//console.log("Pi es "+pi+" cm");

// Circunferencia
function circunferenCirculo(radio){
   const diametro = diametroCirculo(radio);
    return diametro*pi;
} 


//console.log("La circunferencia del circulo es: "+circunferenCirculo+" cm");


// Area
function areaCiruculo(radio){
    return (radio*radio)*pi
}
//console.log(("El area del circulo es : "+areaCiruculo+ "cm"));

console.groupEnd();



// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value
    
    const perimetro = perimetroCuadrado(value);
    alert(`El perimetro del cuadrado es : ${perimetro}`);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value
    
    const area = areaCuadrado(value);
    alert(`El area es del cuadrado es : ${area}`);
}

// Triangulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputTriangulo1");
    const value1 = Number(lado1.value);
   
    const lado2 = document.getElementById("InputTriangulo2");
    const value2 = Number(lado2.value);

    const base = document.getElementById("InputTrianguloBase");
    const valueBase = Number(base.value);

    const perimetro = perimetroTriangulo(value1,value2,valueBase);
    alert(`El perimetro del triangulo: ${perimetro}`)
    console.log(value1);
    console.log(value2);
    console.log(valueBase);
}
function calcularAreaTriangulo(){
    const base = document.getElementById("InputTrianguloBase");
    const valueBase = base.value

    const altura = document.getElementById("InputTrianguloAltura");
    const valueAltura = altura.value

    const area = areaTriangulo(valueBase,valueAltura);
    alert(`El area del triangulo es ${area}`)
}


// Circulo
function calcularDiametroCirculo(){
    const radio = document.getElementById("InputRadio");
    const valueRadio = radio.value;

    const diametro = diametroCirculo(valueRadio);
    alert(`El diametro del circulo es : ${diametro}`)
}

function calcularAreaCirculo(){
    const radio = document.getElementById("InputRadio");
    const valueRadio = radio.value;
    
    const area = areaCiruculo(valueRadio);
    alert(`El area del circulo es : ${area}`)
}

function calcularCircunferenciaCirculo(){
    const radio = document.getElementById("InputRadio");
    const valueRadio = radio.value;

    const circunferencia = circunferenCirculo(valueRadio);
    alert(`La circunferencia del circulo es : ${circunferencia}`)
}

function alturaIsoceles(lado1,lado2,base){
    if(lado1 === lado2){
        console.log("Es isosceles");
        let altura = Math.sqrt((lado1**2- base**2)/4)
        console.log(`La altura es ${altura}`);


    } else{
        console.log("No es isosceles");
    }
}

alturaIsoceles(10,10,5)