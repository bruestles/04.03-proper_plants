export default function Plant({ plant, addPlants }) {
  return (
    <div className="plantcard">
      <p className="plantemoji">{plant.image}</p>
      <p>{plant.name}</p>{" "}
      <button onClick={() => addPlants(plant)}>Add Plant to Cart</button>
    </div>
  );
}
