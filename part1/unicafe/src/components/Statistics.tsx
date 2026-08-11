import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  return (
    <div>
      <h2>statistics</h2>

      {total === 0 ? (
        "No feedback given"
      ) : (
        <table>
          <tbody>

          <StatisticLine text="good" value={good} />

          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />

          <StatisticLine text="average" value={total === 0 ? "0" : average} />

          <StatisticLine
            text="positive"
            value={`${total === 0 ? "0" : positive} %`}
          />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Statistics;
