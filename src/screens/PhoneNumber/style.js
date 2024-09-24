import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    TextContainer: {
        paddingVertical: 25,
    },
    leftIcon: {
        paddingVertical: 40
    },
    icon: {
        width: 20,
        height: 15,
        //tintColor: Colors.primary
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        color: '#4F5F72',
        marginBottom: 10,
        paddingHorizontal: 3,
    },
    phoneInput: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 8
    },
    phoneInputContainer: {
        backgroundColor: 'transparent',
        // borderWidth:1
    },
    textInputContainer: {
        backgroundColor: 'transparent',
    },
    buttonBox: { flex: 1, justifyContent: 'flex-end' },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#0F67B1',
        borderRadius: 7,
        margin: 20,
        marginTop: 250,
        padding: 15,
        //paddingTop: 20,
        width: '90%',
    },
    buttonDisabled: {
        alignItems: 'center',
        backgroundColor: '#96C9F4',
        borderRadius: 7,
        margin: 20,
        padding: 15,
        marginTop: 250,
        //paddingTop: 20,
        width: '90%',
    },

})

export default styles;