import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F7FA',
    },
    leftIcon: {
        paddingVertical: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#606770',
        // marginBottom: 20,
    },
    subtitle1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4F5F72',
        marginBottom: 40
    },
    Inputcontainer: {
        backgroundColor: 'white',
        paddingVertical: 5,
        borderRadius: 8

    },
    otpInput: {
        borderRightWidth: 1,
        height: 40,
        borderBottomWidth: 0,
        textAlign: 'center',
        fontSize: 18,
        margin: 5,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#0F67B1',
        borderRadius: 8,
        padding: 14,
        width: '100%',
    },
    buttonDisabled: {
        alignItems: 'center',
        backgroundColor: '#96C9F4',
        borderRadius: 8,
        padding: 14,
        width: '100%',
    },
    errorView: { flexDirection: 'row', paddingTop: 10 },
    errorImage: { width: 20, height: 20 },
    buttonBox: { flex: 1, justifyContent: 'flex-end' },
    resendText: {
        fontSize: 16,
        color: '#007BFF',
        marginVertical: 30,
        textAlign: 'right'
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
    },
    modalImage: {
        width: 50,
        height: 50
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#60707D'
    },
    modalButton: {
        backgroundColor: '#0F67B1',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default styles;