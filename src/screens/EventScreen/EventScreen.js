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
          title="TÁBORJELENTKEZÉS"
        />
        <ScrollView style={styles.body}>
          {this._renderItems(events)}
        </ScrollView>
      </View>
    );
  }

  _renderItems(data) {

    return data.map((element, key) => {
      return (
        <View key={key}>
          <Text style={styles.eventName}>{element.name}</Text>
          <Text style={styles.eventDate}>{element.start} - {element.end}</Text>
          <Text>Helyszín: {element.location.city}, {element.location.address}</Text>
          <Text>Főrendező: {element.contact.name}</Text>
          <Text>E-mail cím: {element.contact.email}</Text>
          {renderIf(element.status === 'UNFILLED'),
            <SSSLButton
              title="Jelentkezés"
              onPress={this.onApplyPress(element.id)}
              style={styles.buttonButton}/>
          }
          {renderIf(element.status === 'FILLED'),
          <View>
            <SSSLButton
              title="Törlés"
              onPress={this.onDeletePress(element.id)}
              style={styles.buttonButton}>
            </SSSLButton>
            <SSSLButton
              title="Módosítás"
              onPress={this.onModifyPress(element.id)}
              style={styles.buttonButton}>
            </SSSLButton>
          </View>
          }
        </View>
      )
    })
  }

  onApplyPress(id){
    this.props.getSingleEvent(id);
  }

  onDeletePress(id){
    this.props.deleteApplication(id);
  }

  onModifyPress(id){
    this.props.modifyApplication(id);
  }
}

EventScreen.propTypes = {};

const mapStateToProps = (state, props) => ({
  events: state.reducer.loadedEvents.events,
  singleEventStatus: state.reducer.loadedEvents.singleEventStatus
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen);