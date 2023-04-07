import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from '../Statistics/Statistics.module.css';

class Statistics extends Component {
  PropTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        {Object.keys(this.props).map(key => {
          return (
            <p
              key={nanoid()}
              className={css.Text}
            >{`${key}: ${this.props[key]}`}</p>
          );
        })}
      </div>
    );
  }
}

export default Statistics;
