import { useState } from 'react';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export default function App() {

    const [stats, setStats] = useState({
        'good': 0,
        'neutral': 0,
        'bad': 0,
    });

    const { good, neutral, bad } = stats;

    const onLeaveFeedback = (e) => {setStats(prevState => ({...prevState, [e.target.id]: prevState[e.target.id] + 1, }))}

    const countTotalFeedback = () => good + neutral + bad;

    const countPositiveFeedbackPercentage = () => Math.round((good * 100) / countTotalFeedback());
    
    
    
    return (
        <Section title='Please leave feedback'>
            <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={onLeaveFeedback} />
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
            />
        </Section>    
    )
}