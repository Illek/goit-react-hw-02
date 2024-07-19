import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import { useState } from "react";

const App = () => {
  const [feedbackList, setFeedbackList] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Update current feedback state
  const updateFeedback = (feedbackType) => {
    setFeedbackList({
      ...feedbackList,
      [feedbackType]: feedbackList[feedbackType] + 1,
    });
    console.log(feedbackList[feedbackType]);
  };

  // Total summary feedback
  const totalFeedback =
    feedbackList["good"] + feedbackList["neutral"] + feedbackList["bad"];

  // Positive feedback coefficient
  const positiveFeedback = Math.round(
    (feedbackList["good"] / totalFeedback) * 100
  );
  console.log(positiveFeedback);

  return (
    <div>
      <main>
        <Description />
        <Options updateFeedback={updateFeedback} />
        <Feedback
          feedbackList={feedbackList}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      </main>
    </div>
  );
};

export default App;
