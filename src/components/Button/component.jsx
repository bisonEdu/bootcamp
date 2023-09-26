export const Button = ({ title, onClickCallback, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClickCallback}>
      {title}
    </button>
  );
};
