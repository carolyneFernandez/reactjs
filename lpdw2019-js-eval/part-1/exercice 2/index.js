/* Créer une fonction minValue(array) qui retourne la plus petite valeur d'un tableau de nombre.*/
function minValue(array) {
    
    let min = 999999999999999;
    for (let i = 0; i < array.length; i++) {
     if (array[i] < min) {
        min = array[i];
       }
    }
    return min;
  }