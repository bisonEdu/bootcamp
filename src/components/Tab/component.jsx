import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { Button } from "../Button/component.jsx";

export const Tab = ({ tabId, setActiveRestaurantId, activeTabId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, tabId));

  return (
    <Button
      title={restaurant.name}
      onClickCallback={() => setActiveRestaurantId(tabId)}
      isActive={activeTabId === tabId}
    />
  );
};
