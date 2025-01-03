export default function Feedback({ feedbackData, totalFeedback }) {
  return (
    <div>
      <ul>
        <li>Good: {feedbackData.good}</li>
        <li>Neutral: {feedbackData.neutral}</li>
        <li>Bad: {feedbackData.bad}</li>
        <li>Total: {totalFeedback}</li>
      </ul>
    </div>
  );
}
