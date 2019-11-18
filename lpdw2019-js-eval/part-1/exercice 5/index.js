/**  <li>Créer une classe Animal avec les propriétés: name et sound.</li>
    <li>Ajouter une méthode makeSound() qui affiche dans la console la valeur de sound.</li>
    <li>Créer une classe Lion qui hérite de Animal et qui définit la valeur de sound à "Roaaar"</li>
    <li>Créer une classe Cat qui hérite de Animal et qui définit la valeur de sound à "Meow"</li>
    <li><b>ATTENTION:</b> Chaque classe doit être dans une fichier séparé. Vous les inclurez
      dans index.html avec des balises script.</li> */


// Exemple de code pour vos tests:
const simba = new Lion('Simba');
simba.makeSound(); // --> Roaaar
const felix = new Cat('Felix');
felix.makeSound(); // --> Meow
