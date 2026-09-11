import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [users, setUsers] = useState([]);

    async function addUser() {
        await fetch("http://127.0.0.1:8000/create_user/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
            }),
        });

        setName("");
    }

    async function getUsers() {
        const response = await fetch(
            "http://127.0.0.1:8000/get_users/"
        );

        const data = await response.json();

        setUsers(data);
    }

    return (
        <div>
            <h1>User App</h1>

            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={addUser}>
                Add User
            </button>

            <br />
            <br />

            <button onClick={getUsers}>
                View Users
            </button>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;