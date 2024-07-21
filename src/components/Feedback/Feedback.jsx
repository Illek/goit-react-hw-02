// import s from "./Feedback.module.css";

const Feedback = ({ feedbackGrades, totalFeedback, positiveFeedback }) => {
  return (
    <ul>
      <li>
        <p>Good: {feedbackGrades.good}</p>
      </li>
      <li>
        <p>Neutral: {feedbackGrades.neutral}</p>
      </li>
      <li>
        <p>Bad: {feedbackGrades.bad}</p>
      </li>
      <li>
        <p>Tota: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {positiveFeedback ? positiveFeedback : "0"}%</p>
      </li>
    </ul>
  );
};

export default Feedback;
