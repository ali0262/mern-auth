import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <NavLink to={"/"}>
          <h1 className="font-bold">Auth App</h1>
        </NavLink>
        <ul className="flex gap-4">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/signin"}>Sign In</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
