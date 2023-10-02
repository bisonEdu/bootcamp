import { Dish } from "../Dish/component.jsx";

const min = 0;
const max = 5;

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      {menu.map(({ id, name }) => (
        <ul key={id}>
          <li>
            <Dish name={name} min={min} max={max} />
          </li>
        </ul>
      ))}
    </div>
  );
};
