/** 
 *   <li>Créer une fonction add(a, b) qui retourne la somme de a et b.</li>
    <li>Créer une fonction sub(a, b) qui retourne la soustraction de a et b.</li>
    <li>Créer une fonction mult(a, b) qui retourne le produit de a par b.</li>
    <li>Créer une fonction div(a, b) qui retourne la division de a par b.</li>  
*/
  function add(a,b) {
    return a+b
  }
  function sub(a,b) {
    return a-b
  }
  function mult(a,b) {
    return a*+b
  }
  function div(a,b) {
      if(b==0){
          return 'IMPOSIBLE'
      }else{
        return a/b
      }
  
  }
