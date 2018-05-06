import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions/actions';

import styles from './styles';
import SsslTitleBar from '../../components/SsslTitleBar';
import SSSLButton from '../../components/SsslButton';
import renderIf from '../../utils/RenderUtil';

class EventScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getEvents();
  }

  render() {

    const {events} = this.props;

    return (
      <View style={styles.container}>
        <SsslTitleBar
          title="ESEMÉNYEK"
        />
        <ScrollView style={styles.body}>
          {this._renderItems(events)}
        </ScrollView>
      </View>
    );
  }

  _renderItems(data) {

    return data.map((element, key) => {
      const start = new Date(element.start).toLocaleDateString();
      const end = new Date(element.end).toLocaleDateString();
      return (
        <View style={styles.event} key={key}>
          <Text style={styles.eventName}>{element.name}</Text>
          <Text style={styles.eventDate}>{start} - {end}</Text>
          <Text>Helyszín: {element.location.city}, {element.location.address}</Text>
          <Text>Főrendező: {element.contact.name}</Text>
          <Text>E-mail cím: {element.contact.email}</Text>
          <SSSLButton
            title="Formok"
            onPress={() => this.onPress(element.id)}
            style={styles.button}/>
        </View>
      )
    })
  }

  onPress(id){
    this.props.getForms(id);
  }
}

EventScreen.propTypes = {};

const mapStateToProps = (state, props) => ({
  events: state.reducer.loadedEvents.events
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen);