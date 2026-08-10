import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const goodScore = 1;
  const NeutralScore = 0;
  const BadScore = -1;

  const TotalGoodScore = good * goodScore;
  const TotalNeutralScore = neutral * NeutralScore;
  const TotalBadScore = bad * BadScore;

  const sumOfScore = TotalGoodScore + TotalBadScore + TotalNeutralScore;

  const average = sumOfScore / total;

  const positiveScore = (good / total) * 100;

  const handleClickGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + bad + neutral);
  };

  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(updatedNeutral + good + bad);
  };

  const handleClickBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(updatedBad + good + neutral);
  };

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button onClick={handleClickGood} text="good" />

        <Button onClick={handleClickNeutral} text="neutral" />

        <Button onClick={handleClickBad} text="bad" />
      </div>

      <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          positive={positiveScore}
      /> 
    </div>
  );
};

export default App;
