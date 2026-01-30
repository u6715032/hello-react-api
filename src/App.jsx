import { useEffect, useState } from "react";
import { getItems } from "./api/items";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((data) => {
      setItems(data.items);
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Item List</h1>

      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.itemName} — {item.itemCategory} — ${item.itemPrice} —{" "}
            {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
