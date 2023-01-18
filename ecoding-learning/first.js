const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

btn.addEventListener('click', btnOnClick);
function btnOnClick()
{
    let intNum1 = parseInt(input1.value); 
    let intNum2 =parseInt(input2.value );
    pResult.innerHTML= intNum1 + intNum2 ;
}
