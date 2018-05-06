import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$ssslSecondaryColor"
  },

  body: {
    paddingVertical: "$ssslBodyPadding",
    paddingHorizontal: 20,
  },

  field: {
    marginBottom: 20
  },

  label: {
    marginBottom: 10
  },

  radioForm: {
    alignSelf: "flex-start"
  }
  
});