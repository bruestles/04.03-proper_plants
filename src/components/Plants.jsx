import Plant from "./Plant";

export default function Plants({ plants, addPlants }) {
  return (
    <>
      <h2>Plants 🐶</h2>
      <section className="store">
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addPlants={addPlants} />
        ))}
      </section>
    </>
  );
}
