import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="">
      <nav className="mr-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/users">Users</Link>
      </nav>
    </div>
  );
}
