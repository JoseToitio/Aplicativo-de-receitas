import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';

export default function MainFoods({ history }) {
  return (
    <main>
      <Header name="Foods" showIcon history={ history } />
      <BottomMenu />
    </main>
  );
}

MainFoods.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
