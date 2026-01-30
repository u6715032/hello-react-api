import { useState } from "react";

export default function ItemForm({ onSubmit, initialData }) {
  const [form, setForm] = useState(
    initialData || {
      itemName: "",
      itemCategory: "",
      itemPrice: "",
      status: "Available",
    }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      itemName: "",
      itemCategory: "",
      itemPrice: "",
      status: "Available",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="itemName" placeholder="Name" onChange={handleChange} value={form.itemName} />
      <input name="itemCategory" placeholder="Category" onChange={handleChange} value={form.itemCategory} />
      <input name="itemPrice" placeholder="Price" onChange={handleChange} value={form.itemPrice} />
      <select name="status" onChange={handleChange} value={form.status}>
        <option>Available</option>
        <option>Unavailable</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
}
