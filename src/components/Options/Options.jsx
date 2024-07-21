import clsx from "clsx";
import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
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
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      <button
        className={clsx(totalFeedback > 0 ? s.visible : s.invisible, s.btn)}
        type="button"
        onClick={resetFeedback}
      >
        Reset
      </button>
    </div>
  );
};

export default Options;
