import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const handleClickBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button onClick={handleClickGood} text="good" />

        <Button onClick={handleClickNeutral} text="neutral" />

        <Button onClick={handleClickBad} text="bad" />
      </div>

      <div>
        <h2>statistics</h2>

        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad} </p>
      </div>
    </div>
  );
};

export default App;
