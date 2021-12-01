import { NavLink } from "react-router-dom";
import { Route } from "../routes/routes";

type Props = {
  routes: Route[];
  fondo?: boolean;
};

export const Menu: React.FC<Props> = ({ fondo, routes }) => {
  return (
    <nav className={fondo ? "navigation" : ""}>
      <ul>
        {routes.map(({ to, name }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
