import s from "./Options.module.css";
import clsx from "clsx";

const Options = ({ updateFeedback }) => {
  return (
    <div>
      <button
        className={clsx(s.btn)}
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={clsx(s.btn)}
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={clsx(s.btn)}
        onClick={() => {
          {
            updateFeedback("bad");
          }
        }}
      >
        Bad
      </button>
    </div>
  );
};

export default Options;
