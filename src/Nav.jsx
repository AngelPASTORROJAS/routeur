import { NavLink } from "react-router-dom";
const Nav = () => {
  const checkIsActive = ({ isActive }) => {
    return {
      display: "block",
      margin: "10px",
      color: isActive ? "green" : "black",
    };
  };

  return (
    <nav>
      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li>
          <NavLink style={checkIsActive} to="/form">
            Formulaire
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsActive} to="/effect">
            Exemple UseEffect
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
