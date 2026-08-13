const Total = ({ parts }) => {
  return (
    <p>
      <strong>
        {`total of 
      ${parts.reduce((sum, item) => sum + item.exercises, 0)}
      exercises`}
      </strong>
    </p>
  );
};

export default Total;
