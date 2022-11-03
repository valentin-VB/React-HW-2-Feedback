import React, { Component } from 'react';
// import { Box } from 'components/Training/Box';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelBthClick = (evt, option) => {
    this.setState(prevState => {
      return {
        [option]: (prevState[option] += 1),
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good * 100) / this.countTotalFeedback();
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handelBthClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {Object.values(this.state).some(el => el) ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;

const a = [NaN, undefined, 0, -2, 0, -1];

const b = a.some(n => {
  return n;
});
console.log('b', b);
