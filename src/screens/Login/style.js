import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        backgroundColor: '#478CCF',
        padding: 20,
        flex:0.01
    },
    gif: {
        marginTop: 30
    },
    text1: {
        color: '#FFFFFF',
        paddingTop: 12,
        fontSize: 29,
        fontWeight: 'bold',
    },
    text2: {
        color: '#FFFFFF',

    },
    bottomView: {
        flexDirection: 'row',
    },
    lineView: {
        height: 1, 
        width: '20%', 
        backgroundColor: '#FFFFFF', 
        marginTop: 25, 
        marginBottom: 25
    }
})

export default styles;