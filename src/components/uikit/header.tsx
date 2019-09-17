import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
}

const Header = ({title}: Props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d8fe',
    height: 116,
    justifyContent: 'center',
    paddingLeft: 22,
    paddingTop: 71,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Header;
