import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SsslStyles from '../components/SsslStyles';
import Images from '../assets/img/Images';

export default class SsslTitleBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.titleBar}>
        <Text style={styles.titleBarText}>{` ${this.props.title} `}</Text>
        {this.props.backArrow &&
        <TouchableOpacity
          onPress={() => {
            this.props.backArrow();
          }}
          style={styles.backArrowField}
        >
          <Image
            style={styles.stretch}
            source={Images.images.backArrow}
          />
        </TouchableOpacity>
        }
      </View>
    );
  }
}

SsslTitleBar.propTypes = {
  backArrow: PropTypes.func,
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
    color: '$ssslSecondaryColor',
    fontFamily: "$ssslFont"
  },
  backArrowField: {
    position: "absolute",
    left: 0,
    width: 70,
    height: 52
  },
  stretch: {
    position: "absolute",
    left: 22.5,
    top: 13.5,
    width: 13,
    height: 25
  }
});