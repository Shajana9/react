import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }
  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>get advice</button>
      <p>
        you have read <strong>23</strong> piece of advice
        </p>
    </div>
  );
}
