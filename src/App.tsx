import { useEffect, useState } from "react";
import "./styles.css";

const BadStopWatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((v) => v + 0.1);
    }, 1000);
  }, []);

  return <div>Bad StopWatch: {count.toFixed(1)}</div>;
};
const GoodStopWatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((v) => v + 0.1);
    }, 1000);
    return () => clearInterval();
  }, []);

  return <div>Bad StopWatch: {count.toFixed(1)}</div>;
};

export default function App() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <BadStopWatch />
      <GoodStopWatch />
    </div>
  );
}
