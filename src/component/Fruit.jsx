export default function Fruit({ fruitInfo, onFruitDelete }) {
  //state
  // const fruitInfo = props.fruitInfo;
  // const onFruitDelete = props.onFruitDelete;
  //comportement
  //affichage
  return (
    <li>
      {fruitInfo.nom}
      <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>{" "}
    </li>
  );
}
