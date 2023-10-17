import { useSelector } from "react-redux";
import { User } from "./component.jsx";
import { selectUserById } from "../../redux/entities/user/selectors.js";

export const UserContainer = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));
  if (!user) return null;
  return <User {...user} />;
};
