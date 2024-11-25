import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      {/* <h2 className="text-4xl">This is header.</h2> */}
      <div className="flex gap-12 m-12">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">LogIn</NavLink>
        <NavLink to="/signin">SignIn</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
      </div>
    </div>
  );
}
