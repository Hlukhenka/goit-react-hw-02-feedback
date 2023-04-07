import React, { Component } from 'react';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? `${((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)}%`
      : `0%`;
  };

  handleClick = evt => {
    this.setState(prevState => {
      return {
        [evt.target.textContent]: prevState[evt.target.textContent] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
