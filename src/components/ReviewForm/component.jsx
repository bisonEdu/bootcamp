import classNames from "classnames";
import styles from "./styles.module.scss";
import { useReducer } from "react";
import { Button } from "../Button/component.jsx";

const DEFAULT_VALUE = {
  name: "",
  review: "",
  rating: "",
};

const formReducer = (state, action) => {
  switch (action?.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setReview":
      return { ...state, review: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    case "reset":
      return { ...DEFAULT_VALUE };

    default:
      return state;
  }
};

export const ReviewForm = ({ className }) => {
  const [formValue, dispatch] = useReducer(formReducer, DEFAULT_VALUE);

  return (
    <div className={classNames(styles.root, className)}>
      <h3>Add new review</h3>
      <input
        type="text"
        value={formValue.name}
        className={styles.input}
        placeholder="Name:"
        onChange={(event) => {
          dispatch({ type: "setName", payload: event.target.value });
        }}
      />
      <input
        type="text"
        value={formValue.review}
        className={styles.input}
        placeholder="Review:"
        onChange={(event) => {
          dispatch({ type: "setReview", payload: event.target.value });
        }}
      />
      <input
        type="number"
        value={formValue.rating}
        className={styles.input}
        placeholder="Rating:"
        onChange={(event) => {
          dispatch({ type: "setRating", payload: event.target.value });
        }}
      />
      <div className={styles.buttons}>
        <Button
          onClickCallback={() => dispatch({ type: "reset" })}
          title={"Clear"}
        />
        <Button
          title={"Add"}
          onClickCallback={() => {
            console.log(formValue);
            dispatch({ type: "reset" });
          }}
        />
      </div>
    </div>
  );
};
