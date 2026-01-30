import { useEffect, useState } from "react";
import { getItems, createItem, updateItem, deleteItem } from "../services/itemApi";
import ItemForm from "../components/ItemForm";

export default function Items() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const loadItems = async () => {
    const data = await getItems(page);
    setItems(data.items);
  };

  useEffect(() => {
    loadItems();
  }, [page]);

  const handleCreate = async (item) => {
    await createItem(item);
    loadItems();
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    loadItems();
  };

  return (
    <div>
      <h2>Item Management</h2>

      <ItemForm onSubmit={handleCreate} />

      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.itemName} - {item.itemCategory} - ${item.itemPrice}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
