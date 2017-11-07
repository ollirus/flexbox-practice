import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { back, toggleDrawer } from '../actions/navigation';
import PropTypes from 'prop-types';

const Header = ({ back, toggleDrawer, navigation, title }) => {
  const firstRoute = navigation.routes[navigation.index].routeName === 'LeagueScreen';
  const name = firstRoute ? 'ios-menu' : 'ios-arrow-round-back';
  const cb = firstRoute ? toggleDrawer : back;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Icon name={name} color={'white'} size={32} onPress={cb} />
    </View>
  );
};

Header.propTypes = {
  back: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  navigation: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
};

const styles = {
  container: {
    paddingTop: 25,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#69D8BB',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
};

const mapStateToProps = state => ({ navigation: state.stack });
export default connect(mapStateToProps, { back, toggleDrawer })(Header);
