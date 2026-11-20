export default function Store({ selections, removePlants }) {
  return (
    <>
      <h2>Selections</h2>

      {selections.length === 0 ? (
        <p>Your cart is empty. Select some plants to add to your cart.</p>
      ) : (
        <>
          {selections.map((plant) => {
            return (
              <div key={plant.id}>
                <button
                  onClick={() => removePlants(plant)}
                  style={{ color: "red" }}
                >
                  -
                </button>{" "}
                <span>
                  {plant.name}: {plant.quantity} selections
                </span>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
