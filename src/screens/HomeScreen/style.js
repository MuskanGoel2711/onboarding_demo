import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    TopNav: {
      backgroundColor: '#2a7bbb',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 40,
      paddingBottom: 20,
    },
    rightNav: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '30%',
    },
    welcText: {
      fontSize: 20,
      color: 'white',
      fontWeight: '300',
    },
    name: {
      fontSize: 20,
      fontWeight: '600',
      color: 'white',
    },
    iconContainer: {
      backgroundColor: '#3e88c2',
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    iconstyle: {
      height: 25,
      width: 25,
    },
    bodyContainer: {
      paddingHorizontal: 10,
      paddingTop: 20,
      backgroundColor: '#e7edf3',
      flex: 1,
    },
    frequentlyContner: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom:20,
    },
    notification: {
      paddingBottom: 20,
    },
    heading: {
      fontSize: 12,
      fontWeight: '600',
      paddingBottom: 10,
    },
    activitiesContainer: {
      backgroundColor: 'white',
      padding: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    modalView: {flexDirection: 'row'},
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '100%',
      height: '75%',
      backgroundColor: '#e8f0fa',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 150,
      marginBottom: 20,
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'left',
      marginLeft: 17
    },
    modalText: {
      fontSize: 16,
      // textAlign: 'center',
      color: '#4D5876',
      marginBottom: 20,
      marginLeft: 17
    },
    stepsContainer: {
      marginBottom: 20,
    },
    stepText: {
      fontSize: 16,
      // marginBottom: 10,
      marginTop: 17,
      // textAlign: 'center',
    },
    button: {
      width: '100%',
      // height: 45,
      backgroundColor: '#2A7BBB',
      paddingVertical: 16,
      borderRadius: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center'
    },
  })

export default styles;