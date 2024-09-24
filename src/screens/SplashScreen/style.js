import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    RootView:
    {
        justifyContent: 'center',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#478CCF',

    },
    ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
    },
    gif: {
        width: 350,
        height: 150,
    }
})

export default styles;