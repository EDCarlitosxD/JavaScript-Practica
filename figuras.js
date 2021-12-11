// Código del cuadrado
console.group("Código cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado mide: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es :" + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es :" + areaCuadrado + " cm^2");
console.groupEnd();

// Código del triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados del triangulo son: "
    + ladoTriangulo1
    + " cm"
    + ladoTriangulo2
    + " cm"
    + baseTriangulo
    + " cm");
const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es : " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es de : " + areaTriangulo + "cm^2");


console.groupEnd();

// Código del circulo
console.group("Circulos");
// Radio
const radioCirculo = 4;
console.log("El radio del circulo es : "+radioCirculo+" cm");

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es : "+ diametroCirculo+" cm");

// PI
const pi = Math.PI;
console.log("Pi es "+pi+" cm");

// Circunferencia
const circunferenCirculo = diametroCirculo * pi;
console.log("La circunferencia del circulo es: "+circunferenCirculo+" cm");


// Area
const areaCiruculo = (radioCirculo* radioCirculo)* pi;
console.log(("El area del circulo es : "+areaCiruculo+ "cm"));

console.groupEnd();

