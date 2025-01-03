import Feedback from "../Feedback/Feedback";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import { useState } from "react";

export default function App() {
  const [feedbackData, setFeedbackData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback =
    feedbackData.good + feedbackData.neutral + feedbackData.bad;

  function updateFeedback(feedbackType) {
    setFeedbackData((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  }

  function resetFeedback() {
    setFeedbackData({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedbackData={feedbackData} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
