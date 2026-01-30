const API_BASE = "http://localhost:3000/api/items";

export const getItems = async (page = 1, limit = 5) => {
  const res = await fetch(`${API_BASE}?page=${page}&limit=${limit}`);
  return res.json();
};

export const createItem = async (item) => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return res.json();
};

export const updateItem = async (id, item) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return res.json();
};

export const deleteItem = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
