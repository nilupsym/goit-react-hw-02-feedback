import React, { Component } from 'react';

class App extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleGoodButton = () => {
        this.setState(prevState => ({ good: prevState.good + 1, }))
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    }

    handleNeutralButton = () => {
        this.setState(prevState => ({ neutral: prevState.neutral + 1, }))
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    }

    handleBadButton = () => {
        this.setState(prevState => ({ bad: prevState.bad + 1, }))
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    }

    countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;


    countPositiveFeedbackPercentage = () => Math.round((this.state.good * 100) / this.countTotalFeedback());
    
    
    render() {
        return (
            <>
                <h2>Please leave feedback</h2>
                <div>
                    <button type='button' onClick={this.handleGoodButton}>Good</button>
                    <button type='button' onClick={this.handleNeutralButton}>Neutral</button>
                    <button type='button' onClick={this.handleBadButton}>Bad</button>
                </div>
                <h2>Statistics</h2>
                <p>Good: {this.state.good}</p>
                <p>Neutral:{this.state.neutral}</p>
                <p>Bad:{this.state.bad}</p>
                <p>Total: {this.countTotalFeedback()}</p>
                <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
            </>
            
    )}
}
export default App;