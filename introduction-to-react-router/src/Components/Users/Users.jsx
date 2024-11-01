import { useLoaderData } from "react-router-dom";
import User from "../User/User";

export default function Users() {
  const users = useLoaderData();
  return (
    <div>
      <h2>Our Users: {users.length}</h2>
      <div>
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
}
