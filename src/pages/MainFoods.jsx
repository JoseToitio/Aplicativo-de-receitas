import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export default function MainFoods({ history }) {
  return (
    <Header name="Foods" showIcon history={ history } />
  );
}

MainFoods.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
