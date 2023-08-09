
function calcular(event){

  
  let altura=document.getElementById('altura').value;
  let peso=document.getElementById('peso').value;

  
  if(altura=="" || peso==""){
    alert("preecha os campos");
  }

  if(altura<=1.40 && peso>=60){
    document.getElementById('totalZip').style.display="none";
  }else{
    document.getElementById("totalZip").style.display="block"
  }
  
  let ress=peso/(altura*altura);
  /** coloacndo o vaor em duas casas decimais */
  ress=ress.toFixed(2);
  
 
  
  if (ress > 40) {
    document.getElementById('situ').innerHTML= "Situação: Obesidade III (mórbida)";
} else if (ress >=35 && ress <= 39.99) {
  document.getElementById('situ').innerHTML= "Situação: Obesidade II (severa)";
} else if (ress >= 30 && ress <= 34.99) {
  document.getElementById('situ').innerHTML= "Situação: Obesidade I";
} else if (ress >= 25 && ress <= 29.99) {
  document.getElementById('situ').innerHTML= "Situação: Acima do peso";
} else if (ress >= 18.5 && ress <= 24.99) {
  document.getElementById('situ').innerHTML= "Situação: Peso normal";
} else if (ress >= 17 && ress <= 18.49) {
  document.getElementById('situ').innerHTML = "Situação: Peso normal";
} else {
  document.getElementById('situ').innerHTML  = "Situação: Muito abaixo do peso";
}

  document.getElementById('ressimc').innerHTML=ress;

  /** chamando a di que estava invisivel(totalzip) */
  document.getElementById("totalZip").style.display="block"
 

}
/**deixando a div totalzip invisivel */
document.getElementById("totalZip").style.display="none";

/**chamando a função  calcular*/
document.getElementById('tipsForm').addEventListener('submit',calcular)




