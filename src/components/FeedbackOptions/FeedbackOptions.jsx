import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  PropTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { onLeaveFeedback, options } = this.props;
    return (
      <div>
        {options.map(btn => {
          return (
            <button
              key={nanoid()}
              type="button"
              onClick={onLeaveFeedback}
              className={css.Btn}
            >
              {btn}
            </button>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;
