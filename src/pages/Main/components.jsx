import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Header } from "../../components/Header/component.jsx";
import { Footer } from "../../components/Footer/component.jsx";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantTabContainer } from "../../components/Tabs/container.jsx";
import {
  selectRestaurantIds,
  selectRestaurantLoadingStatus,
} from "../../redux/entities/restaurant/selectors.js";
import { RestaurantContainer } from "../../components/Restaurant/container.jsx";
import { REQUEST_STATUS } from "../../constants/statuses.js";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants.js";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );

  const loadingStatus = useSelector(selectRestaurantLoadingStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <>
      {loadingStatus === REQUEST_STATUS.pending ? (
        <div className={styles.loading}>Loading</div>
      ) : (
        <div className={classNames(styles.content, "main")}>
          <Header className={styles.header} />

          <div className={styles.block}>
            <RestaurantTabContainer
              activeTabId={activeRestaurantId}
              setActiveRestaurantId={setActiveRestaurantId}
            />

            {activeRestaurantId ? (
              <RestaurantContainer restaurantId={activeRestaurantId} />
            ) : (
              <div>Please select any restaurant </div>
            )}
          </div>

          <Footer className={styles.footer} />
        </div>
      )}
    </>
  );
};
