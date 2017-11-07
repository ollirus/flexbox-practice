import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { Drawer } from './navigationConfiguration';
import PropTypes from 'prop-types';

const DrawerNavigation = ({ dispatch, navigation }) => (
  <Drawer
    navigation={
      addNavigationHelpers({
        dispatch,
        state: navigation,
      })
    }
  />
);

DrawerNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({ navigation: state.drawer });
export default connect(mapStateToProps)(DrawerNavigation);
