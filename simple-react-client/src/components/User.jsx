import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function User() {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (_id) => {
    console.log("DELETE: ", _id);

    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const remaining = users.filter((user) => user._id !== _id);
        setUsers(remaining);
      });
  };

  return (
    <div>
      <h2>Total Users: {users.length}</h2>
      <br />
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} - {user.email}
            <Link to={`/update/${user._id}`}>
              <button>UPDATE</button>
            </Link>
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
}
