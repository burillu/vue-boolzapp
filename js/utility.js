// FUNCTION LIBRARY

/**
 * [getRndInteger]
 * Genera un numero intero random
 * @param {Number} min il numero minimo
 * @param {Number} max il numero massimo
 * 
 * @returns {Number} numero generato a caso compresi min e max
 */


export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
/**
 * Determina se il numero è pari
 * @param {Number} num 
 * @returns {Boolean}
 */
function isEven (num){
    return (num % 2 === 0) ? true : false;
}


 

/**
 * // funzione per passare da un input all altro una volta raggiunto il maxlength di ogni elemento
 * @param {*} e 
 */


 function autoSwitchInput(e) {
        
  const inputCollect = Array.prototype.slice.call (document.getElementsByTagName('input'));
  const element = e.srcElement;
  let i = inputCollect.indexOf(e.srcElement);
  
  let ml = element.maxLength;
  let lg = element.value.length;
  if (lg >= ml && i <inputCollect.length -1) {
       inputCollect[i+1].focus();
   }
  
  
  
}
//funzione per ottenere l'indice dell'oggetto contenuto in un array di oggetti
export function findElement(ident, array){
  return array.findIndex(el=> el.id === ident);
}