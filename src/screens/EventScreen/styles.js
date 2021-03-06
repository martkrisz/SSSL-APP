import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$ssslSecondaryColor"
  },

  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20
  },

  event: {
    marginBottom: 20
  },

  eventName: {
    fontSize: 25,
    color: "$ssslPrimaryColor",
    marginBottom: 15
  },

  buttonSection: {
    marginTop: 20
  },

  button: {
    marginTop: 20
  }
});