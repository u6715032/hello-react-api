import { useEffect, useState } from "react";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");

  async function loadUsers() {
    const res = await fetch("http://localhost:3000/api/users");
    const data = await res.json();
    setUsers(data);
  }

  async function updateUser(id) {
    await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newName }),
    });
    setNewName("");
    loadUsers();
  }

  async function deleteUser(id) {
    await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "DELETE",
    });
    loadUsers();
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h2>User Management</h2>

      <input
        placeholder="New name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.name} ({u.email})
            <button onClick={() => updateUser(u._id)}>Update</button>
            <button onClick={() => deleteUser(u._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
