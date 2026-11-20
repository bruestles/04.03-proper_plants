import { useState } from "react";
import PLANTS from "./data.js";
import Selections from "./components/Store.jsx";
import Plants from "./components/Plants";

export default function App() {
  const [selections, setSelections] = useState([]);

  /**
   *  Try to find if a dog already has treats.
   *  If true, then create a new copy of treats by mapping over it and
   *  increasing the quantity of treats for the individual dog by 1.
   *  If false, then create a new treat item with a quantity of 1.
   *  A treat item is just a dog with an additional quantity property.
   */
  const addPlants = (plant) => {
    const plantExists = selections.find((i) => i.id === plant.id);
    if (plantExists) {
      setSelections(
        selections.map((select) =>
          select.id === plant.id
            ? { ...select, quantity: select.quantity + 1 }
            : select,
        ),
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setSelections([...selections, item]);
    }
  };

  /**
   * First, use `map` to decrease the quantity of the treat to remove by 1.
   * Then, keep only the items that have a quantity greater than 0.
   */
  const removePlants = (plantToRemove) => {
    setSelections(
      selections
        .map((select) =>
          select.id === plantToRemove.id
            ? { ...select, quantity: select.quantity - 1 }
            : select,
        )
        .filter((select) => select.quantity > 0),
    );
  };

  return (
    <>
      <Plants plants={PLANTS} addPlants={addPlants} />
      <Selections selections={selections} removePlants={removePlants} />
    </>
  );
}
