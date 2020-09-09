//dimensiones de la ventana
const circuloRef=document.querySelector("#circulo");
const ancho=window.innerWidth;
const alto=window.innerHeight;

circuloRef.addEventListener('click', function(){
    console.log("gola");
    //tiros=tiros+1;

    let circuloAlto=document.querySelector("#circulo").getElementsByClassName.height;
    let circuloAncho=document.querySelector("#circulo").getElementsByClassName.width;

    let newXpos=Math.floor(Math.random()*ancho-circuloAncho);
    let newYpos=Math.floor(Math.random()*alto-circuloAlto);
    let newTamanio=30+Math.floor(Math.random()*170);
    circuloRef.style.marginLeft=newXpos;
    circuloRef.style.marginTop=newYpos;
    circuloRef.style.height=newTamanio;
    circuloRef.style.width=newTamanio;

    let R=Math.floor(Math.random()*255);
    let G=Math.floor(Math.random()*255);
    let B=Math.floor(Math.random()*255);
    circuloRef.style.backgroundColor='rgb('+R+','+G+','+B+')';

})