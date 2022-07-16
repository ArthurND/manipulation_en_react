import { useState } from "react";
export default function FruitForm({ handleAdd }) {
  //state
  const [nouveauFruit, setNouveauFruit] = useState("");
  //comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    handleAdd(fruitAAjouter);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };
  //affichage
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit"
          onChange={handleChange}
        />
        <button>Ajouter+</button>
      </form>
    </div>
  );
}
