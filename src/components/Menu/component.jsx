import { Dish } from "../Dish/component.jsx";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      {menu.map(({ id, name }) => (
        <ul key={id}>
          <li>
            <Dish name={name} />
          </li>
        </ul>
      ))}
    </div>
  );
};
