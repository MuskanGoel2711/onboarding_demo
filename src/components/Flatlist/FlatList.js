import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';

export default class CustomFlatList extends React.Component{
    renderItem = ({item}) => (
            <View style={styles.container}>
                <Image source={item.source} style={styles.image} />
                <View style={styles.insideContainer}>
                    <Text style={styles.text1}>{item.text1}</Text>
                    <Text style={styles.text1}>{item.text2}</Text>
                </View>
            </View>
    )
    render(){
        return(
            <FlatList 
                data={this.props.data}
                renderItem={this.renderItem}
                keyExtractor={this.props.keyExtractor}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
    },
    insideContainer: {
        flexDirection: 'column',
        marginLeft: 13,
        marginRight: 15
    },
    image: {
        width: 20,
        height: 20,
        borderRadius: 25,
    },
    text1: {
        color: '#FFFFFF'
    }
})