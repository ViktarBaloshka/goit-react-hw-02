import Feedback from "../Feedback/Feedback";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import { useEffect, useState } from "react";

export default function App() {
  const [feedbackData, setFeedbackData] = useState(() => {
    const saveFeedbackData = JSON.parse(localStorage.getItem("key-feedback"));
    if (saveFeedbackData != null) {
      return saveFeedbackData;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("key-feedback", JSON.stringify(feedbackData));
  }, [feedbackData]);

  const totalFeedback =
    feedbackData.good + feedbackData.neutral + feedbackData.bad;
  const positiveFeedback = Math.round(
    (feedbackData.good / totalFeedback) * 100
  );

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
        <Feedback
          feedbackData={feedbackData}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
