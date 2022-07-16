import { useState } from "react";
import Fruit from "./component/Fruit";
import FruitForm from "./component/FruitForm";

function App() {
  //state
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  //comportement
  const handleDelete = (id) => {
    //1.copie du state
    const fruitsCopy = [...fruits];
    //2.manipuler le state
    const fruitCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    //3.modifier le state
    setFruits(fruitCopyUpdated);
  };
  const handleAdd = (fruitAAjouter) => {
    const fruitsCopy = [...fruits];
    fruitsCopy.push(fruitAAjouter);
    setFruits(fruitsCopy);
  };

  //affichage

  return (
    <div>
      <h1>liste de fruit</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onFruitDelete={handleDelete}
            key={fruit.id}
          />
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}
export default App;
//gestion du formulaire
//1.creation du formulaire
//2.soumission du formulaire
//3.colllecte des donnees
