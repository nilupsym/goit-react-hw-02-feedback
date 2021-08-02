import React, { Component } from 'react';

import AppHooks from './AppHooks';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onLeaveFeedback = (e) => {this.setState(prevState => ({ [e.target.id]: prevState[e.target.id] + 1, }))}

    countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

    countPositiveFeedbackPercentage = () => Math.round((this.state.good * 100) / this.countTotalFeedback());
    
    
    render() {
        const { good, neutral, bad } = this.state;
        return (
            <>
            <Section title='Please leave feedback'>
                <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={this.onLeaveFeedback} />
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()} />
                </Section>
                <AppHooks />
            </>    
    )}
}
export default App;
   