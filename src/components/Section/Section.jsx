import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Section/Section.module.css';

class Section extends Component {
  PropTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <section>
        <div className={css.Section}>
          <h1 className={css.Title}>{this.props.title}</h1>
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Section;
