import s from "./Options.module.css";
import clsx from "clsx";

const Options = ({ good, neutral, bad }) => {
  let theNumber = 0;
  return (
    <div>
      <h1>{theNumber}</h1>
      <button className={clsx(s.btn)} onClick={() => good}>
        Good
      </button>
      <button className={clsx(s.btn)} onClick={() => neutral}>
        Neutral
      </button>
      <button className={clsx(s.btn)} onClick={() => bad}>
        Bad
      </button>
    </div>
  );
};

export default Options;
