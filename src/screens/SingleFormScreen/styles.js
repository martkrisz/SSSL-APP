import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$ssslSecondaryColor"
  },

  body: {
    paddingVertical: "$ssslBodyPadding",
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column"
  },

  field: {
    marginBottom: 20
  },

  label: {
    marginBottom: 10
  },

  radioForm: {
    alignItems: "flex-start",
    alignSelf: "flex-start"
  }
  
});