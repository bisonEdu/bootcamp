export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map(({ id, text, user }) => (
        <ul key={id}>
          <li>
            {user} - <span>{text}</span>
          </li>
        </ul>
      ))}
    </div>
  );
};
