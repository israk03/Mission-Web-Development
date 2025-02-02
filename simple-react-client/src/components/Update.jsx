import { useLoaderData } from "react-router-dom";

export default function Update() {
  const loadedUser = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(updatedUser);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h2>Update your profile, {loadedUser.name}</h2>
      <br />
      <form onSubmit={handleUpdate}>
        <input
          type="email"
          name="email"
          defaultValue={loadedUser?.email}
          id=""
        />
        <br />
        <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}
