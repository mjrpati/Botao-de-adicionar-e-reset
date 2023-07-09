
/*Selecionar o botao*/ 
const botao = document.querySelector('button');
const reset = document.querySelector('.reset')

function somar(){
  const div = document.querySelector("div");
  /**Quando colocamos number nós transformamos a string em número, fazendo-a somar. Aqui ja somamos diretamente +1 */
  const total = Number(div.innerText)+1;
  div.innerText = total
  console.log(total);
}

/**Aqui não precisamos vereficar se o botao e true, pois qunado usamos a função boolean, vemos que ele retorna true pois não é uma classe, se fosse uma classe precisiariamos colocar .botao !== null botão diferente de null.
 */
if (botao){
botao.addEventListener('click', somar);
}

function resetar(){
  const div = document.querySelector('div');
  div.innerText = '0';
}

if (reset){
  reset.addEventListener('click', resetar);
}