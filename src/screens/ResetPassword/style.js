import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
     flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  
  },
  container1:{
    flex:1,
    height:800,
  },
  containe2:{
    flex:1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 35,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    // textAlign: 'center',
    marginVertical: 10,
    marginBottom: 30,
  },
  arrowStyle: {
    marginTop: 50,
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 40,
    paddingBottom: 15,
    borderColor: '#FFFFFF',
    borderRadius: 12,
    opacity: 1,
  },
  Lockicon: {
    position: 'absolute',
    width: 18,
    height: 20,
    tintColor: '#4A90E2',
    // paddingRight: 12,
    marginLeft: 12,
    marginTop: 20,
  },
  iconContainer: {
    position: 'absolute',
    right: 19,
    top: 19,
  },
  conditionsContainer: {
    marginVertical: 20,
    marginLeft: 15,
  },
  condition: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  conditionText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  buttonContainer: {
    backgroundColor: '#0F67B1',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
},
buttonDisabled: {
    backgroundColor: '#96C9F4',
    padding: 15,
    borderRadius: 8,
    // alignItems: 'center',
    width: '100%',
},
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertBox: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  alertImage: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#60707D',
  },
  alertButton: {
    width: '55%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#2A7BBB',
    borderRadius: 5,
  },
  alertButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

export default styles;
