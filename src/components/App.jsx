import Description from "./Description/Description";
// import ButtonFeedback from "./Feedback/Feedback";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import { useState } from "react";

const App = () => {
  const [feedbackList, setFeedbackList] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    feedbackType(() => {
      setFeedbackList({
        ...feedbackList,
        {fee}: feedbackList.{fee} + 1,
      });
    });
    };

    // const pressGood = () => {
    //   setFeedbackList({
    //     ...feedbackList,
    //     good: feedbackList.good + 1,
    //   });
    // };
    // const pressNeutral = () => {
    //   setFeedbackList({
    //     ...feedbackList,
    //     neutral: feedbackList.neutral + 1,
    //   });
    // };
    // const pressBad = () => {
    //   setFeedbackList({
    //     ...feedbackList,
    //     bad: feedbackList.bad + 1,
    //   });
    // };

    // const buttons = {
    //   good: pressGood(),
    //   neutral: pressNeutral(),
    //   bad: pressBad(),
    // };

    return (
      <div>
        <main>
          <Description />
          <Options buttons={updateFeedback} />
          <Feedback />
        </main>
      </div>
    );
  };
};

export default App;
