const Statistics = ({ good, neutral, bad, total, average, positive}) => {
  return (
    <div>
      <h2>statistics</h2>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad} </p>

      <p>all {total}</p>

      <p>average {total === 0 ? "0" : average}</p>

      <p>positive {total === 0 ? "0" : positive} %</p>
    </div>
  );
};

export default Statistics;
