import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../../actions/actions';
import styles from './styles';
import SsslTitleBar from '../../components/SsslTitleBar';
import SSSLButton from '../../components/SsslButton';
import renderIf from '../../utils/RenderUtil';
import SplashScreen from 'react-native-splash-screen';

class FormScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
      SplashScreen.hide();
  }

  render() {

    const { forms } = this.props;
    const { goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <SsslTitleBar
          title="FORMOK"
          backArrow={goBack}
        />
        <ScrollView style={styles.body}>
          {this._renderItems(forms)}
        </ScrollView>
      </View>
    );
  }

  _renderItems(data) {

    return data.map((element, key) => {
      const deadline = new Date(element.deadline).toLocaleDateString();
      return (
        <View style={styles.event} key={key}>
          <Text style={styles.formName}>{element.name}</Text>
          <Text>Határidő: {deadline}</Text>
          <View style={styles.buttonArea}>
            {renderIf(!element.isSubmitted,
              <View style={styles.buttonSection}>
                <SSSLButton
                  title="Jelentkezés"
                  onPress={() => this.onApplyPress(element.id)}
                  style={styles.applyButton} />
              </View>
            )}
            {renderIf(element.isSubmitted,
              <View style={styles.buttonSection}>
                <SSSLButton
                  title="Módosítás"
                  onPress={() => this.onModifyPress(element.id)}
                  style={styles.modifyButton} />
                <SSSLButton
                  title="Törlés"
                  onPress={() => this.onDeletePress(element.id)}
                  style={styles.deleteButton} />
              </View>
            )}
          </View>
        </View>
      )
    })
  }

  onApplyPress(id) {
    this.props.getSingleForm(id);
  }

  onModifyPress(id) {
    this.props.getSingleForm(id)
  }

  onDeletePress(id) {
    this.props.deleteForm(id);
  }

}

FormScreen.propTypes = {};

const mapStateToProps = (state, props) => ({
  forms: state.reducer.loadedForms.forms
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormScreen);