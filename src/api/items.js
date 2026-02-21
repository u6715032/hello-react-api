const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api/items";

export const getItems = (page = 1, limit = 5) =>
  fetch(`${API_URL}?page=${page}&limit=${limit}`).then(res => res.json());

export const createItem = (item) =>
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).then(res => res.json());

export const updateItem = (id, item) =>
  fetch(`${API_URL}?id=${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).then(res => res.json());

export const deleteItem = (id) =>
  fetch(`${API_URL}?id=${id}`, { method: "DELETE" }).then(res => res.json());
