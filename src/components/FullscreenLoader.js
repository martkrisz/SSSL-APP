import React, { Component } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Bubbles } from 'react-native-loader';

export class FullscreenLoader extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props;
  }

  render() {
    const isLoading = this.props.visible;

    if (isLoading) {
      return (
        <View style={[styles.container, { flex: 1 }]}>
          <Text style={styles.text}>
            Betöltés
          </Text>
          <Bubbles size={16} color='#FFFFFF' />
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
    fontFamily: '$ssslFont_Bold'
  }
});