import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SsslTitleBar from '../../components/SsslTitleBar';

import { ActionCreators } from '../../actions/actions';
import styles from './styles';
import renderIf from '../../utils/RenderUtil';

class ProfileScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {profile} = this.props;

    return (
      <View style={styles.container}>
        <SsslTitleBar
          title="PROFILOM"
        />
        <View style={styles.body}>
          {this._renderListItem("Becenév", profile.nick)}
          {this._renderListItem("Rang", profile.rank)}
          {this._renderListItem("Gárda", profile.color)}
          {this._renderListItem("Csatlakozás éve", profile.joined)}
          {this._renderListItem("E-mail cím", profile.email)}
          {this._renderListItem("Telefonszám", profile.phone)}
          {this._renderListItem("Szobaszám", profile.room)}
          {this._renderListItem("Lakcím", profile.address)}
        </View>
      </View>
    );
  }

  _renderListItem(title, data) {
    return(
      renderIf(
        data != undefined, 
        <View style={styles.dataRow}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.dataStyle}>{data}</Text>
        </View>
      )
    );
  }
}

ProfileScreen.propTypes = {};

const mapStateToProps = (state, props) => ({
  profile: state.reducer.loadedProfile.profile
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);