import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class SsslTitleBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.titleBar}>
        <Text style={styles.titleBarText}>{` ${this.props.title} `}</Text>
      </View>
    );
  }
}

SsslTitleBar.propTypes = {
  title: PropTypes.string
};

const styles = EStyleSheet.create({
  titleBar: {
    height: 52,
    backgroundColor: "$ssslPrimaryColor",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  titleBarText: {
    fontSize: 16,
    color: 'white',
    fontFamily: "$ssslFont"
  }
});