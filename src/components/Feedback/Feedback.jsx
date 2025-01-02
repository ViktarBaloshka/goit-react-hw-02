import { useState } from "react";
import Options from "../Options/Options";

export default function Feedback() {
  const [feedbackData, setFeedbackData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function updateFeedback(feedbackType) {
    setFeedbackData((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  }
  return (
    <div>
      <Options onFeedback={updateFeedback} />
      <ul>
        <li>Good: {feedbackData.good}</li>
        <li>Neutral: {feedbackData.neutral}</li>
        <li>Bad: {feedbackData.bad}</li>
      </ul>
    </div>
  );
}
