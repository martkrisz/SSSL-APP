import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$ssslSecondaryColor"
  },

  body: {
    paddingVertical: "$ssslBodyPadding",
    paddingHorizontal: 20
  },

  eventName: {
    fontSize: 25,
    color: "$ssslPrimaryColor",
    marginBottom: 15
  },

  button: {
    marginTop: 25
  }


});