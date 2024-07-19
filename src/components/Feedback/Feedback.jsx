// import s from "./Feedback.module.css";

const Feedback = ({ feedbackList, totalFeedback, positiveFeedback }) => {
  return (
    <ul>
      <li>
        <p>Good: {feedbackList.good}</p>
      </li>
      <li>
        <p>Neutral: {feedbackList.neutral}</p>
      </li>
      <li>
        <p>Bad: {feedbackList.bad}</p>
      </li>
      <li>
        <p>Tota: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {positiveFeedback}%</p>
      </li>
    </ul>
  );
};

export default Feedback;
