import { React, useState } from "react";
import Button from "./Components/Button";

import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter((count) => count + 1);
  const decrease = () => setCounter((count) => count - 1);
  const reset = () => setCounter(0);

  return (
    <div>
      <div className={styles.container}>
        <div>
          <Button fnc={"-"} onclick={decrease} />
          <span
            className={
              counter > 0
                ? styles.counterpos
                : counter < 0
                ? styles.counterneg
                : styles.counterdefault
            }
          >
            {counter}
          </span>
          <Button fnc={"+"} onclick={increase} />
        </div>
        <Button fnc={"Reset"} onclick={reset} />
      </div>
    </div>
  );
}

export default App;
