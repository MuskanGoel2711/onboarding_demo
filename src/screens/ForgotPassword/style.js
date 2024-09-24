import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#f2f4f8'
    },
    container1:{
        flex:1,
        height:770,
    },
    container2:{
        flex:1,
    },
    imageView: {
        marginTop: 45
    },
    mainContainer: {
        marginTop: 35,
        padding: 30,
        paddingHorizontal: 1,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '700',
        fontSize: 24,
        marginBottom: 10
    },
    description: {
        fontWeight: '400',
        fontSize: 15,
        color: '#9ca0ab',
        opacity: 1,
        marginBottom: 20
    },
    inputContainer: {
        // flexDirection: 'row',
        position: 'relative',
    },
    EmailIcon: {
        width: 20,
        height: 15,
        position: 'absolute',
        marginLeft: 12,
        marginTop: 24
    },
    input: {
        backgroundColor: '#FFFFFF',
        paddingLeft: 40,
        paddingBottom: 15,
        borderColor: '#FFFFFF',
        borderRadius: 12,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
    },
    buttonContainer: {
        backgroundColor: '#0F67B1',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%'
    },
    buttonDisabled: {
        backgroundColor: '#96C9F4',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%'
    },
    text: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
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
    },
    alertButton: {
        width: '90%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#3FA2F6',
        borderRadius: 5,
    },
    alertButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default styles;