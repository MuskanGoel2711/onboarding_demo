import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flex: 0.4
    },
    inputText1: {
        fontWeight: 'bold',
        fontSize: 23,
        paddingBottom: 12
    },
    inputText2: {
        paddingBottom: 20,
        color: '#4F5F72'
    },
    EmailIcon: {
        width: 20,
        height: 15,
        position: 'absolute',
        marginLeft: 12,
        marginTop: 24
    },

    inputContainer: {
        width: '100%',
        // marginBottom: 20,
    },
    input: {
        // height: 60,
        backgroundColor: '#FFFFFF',
        // paddingTop: 6,
        // borderWidth: 2,
        paddingLeft: 40,
        paddingBottom: 15,
        borderColor: '#FFFFFF',
        borderRadius: 12,
    },
    iconContainer: {
        position: 'absolute',
        right: 19,
        top: 19,
    },
    Lockicon: {
        position: 'absolute',
        width: 18,
        height: 20,
        tintColor: '#4A90E2',
        // paddingRight: 12,
        marginLeft: 12,
        marginTop: 20
    },
    iconStyle: {
        width: 20,
        height: 20,
        tintColor: '#000',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
    },
    forgotPassword: {
        textAlign: 'right'
    },
    buttonBox: { flex: 1, justifyContent: 'flex-end' },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#0F67B1',
        borderRadius: 8,
        padding: 14,
        width: '100%',
        // flex:1,
        // justifyContent:'flex-end',
        // marginRight: 15
    },
    buttonDisabled: {
        alignItems: 'center',
        backgroundColor: '#96C9F4',
        borderRadius: 8,
        padding: 14,
        width: '100%',
        // flex:1,
        // justifyContent: 'flex-end',
        // marginRight: 25
    },
    sectionStyle: {
        marginBottom: 20,
        position: 'relative',
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