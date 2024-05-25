import React, { useState } from 'react';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import styles from '../modules/FeedbackForm.module.css';

const FeedbackForm = ({ onClose }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className={styles.feedbackFormContainer}>
      <div className={styles.feedbackForm}>
        <CloseSharpIcon className={styles.closeButton} onClick={onClose}/>
        <h2 className={styles.formHeading}>Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className={styles.textBox}
              placeholder="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className={styles.textBox}
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className={styles.textBox}
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className={styles.textArea}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className={styles.submitButton}>
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
