import { useLoaderData } from "react-router-dom";

export default function User() {
  const users = useLoaderData();
  const handleDelete = (_id) => {
    console.log("DELETE: ", _id);

    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
}
