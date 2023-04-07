import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css';

class Notification extends Component {
  PropTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    return <h1 className={css.Title}>{this.props.message}</h1>;
  }
}

export default Notification;
