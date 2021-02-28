import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <ul className={style.feedback}>
        {options.map(option => {
            return (<li key={option} className={style.li}><button type='button' id={option} onClick={onLeaveFeedback}>{option}</button></li>)
        })}
    </ul>
);

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;