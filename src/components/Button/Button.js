import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default class CustomButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity 
                onPress={this.props.onPress}
                disabled={this.props.isButtonDisabled}
                activeOpacity={this.props.isButtonDisabled ? 1 : 0.7}
                style={[styles.buttonBox, this.props.style]}
            >
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    buttonBox: {width: '100%', padding: 10, borderRadius: 5, marginTop: 30,
    },
    buttonText: {
        color: 'white', fontWeight: 'bold', textAlign: 'center',
        
    }
}) 