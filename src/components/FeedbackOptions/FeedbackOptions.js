import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <ul>
        {options.map(option => {
            return (<li><button type='button' id={option} onClick={onLeaveFeedback}>{option}</button></li>)
        })}
    </ul>
);

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;