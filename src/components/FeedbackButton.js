import React from 'react';
import Feedback from '../modules/FeedbackButton.module.css';

const FeedbackButton = ({text, onFeedbackButtonClick}) => {
  return (
    <button variant="contained" className={Feedback.feedbackButton} onClick={onFeedbackButtonClick}>
        {text}
    </button>
  )
}

export default FeedbackButton; 