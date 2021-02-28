import React, { Component } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

class App extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onLeaveFeedback = (e) => {this.setState(prevState => ({ [e.target.id]: prevState[e.target.id] + 1, }))}

    countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

    countPositiveFeedbackPercentage = () => Math.round((this.state.good * 100) / this.countTotalFeedback());
    
    
    render() {
        return (<Section title='Please leave feedback'>
               <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={this.onLeaveFeedback} />
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>    
    )}
}
export default App;