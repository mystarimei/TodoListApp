import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, Switch, Dimensions } from 'react-native';
import nocheck from './images/1.jpg'
export default function LifeItem(props) {
    const {
        todo: { id, type, title, deadline, time, completed },
        onPress, onDelete
    } = props;
    return (
        <View>

            <View style={styles.content}>

                <TouchableOpacity onPress={() => onPress(id)} >
                    <View style={{ flex: 0.1 }}>
                        <Image style={styles.imageCheck} source={nocheck} />
                    </View>
                </TouchableOpacity>

                <View style={styles.todoContent}>
                    <Text style={styles.unCompletedtitle}>{title}</Text>
                    <Text>{time}</Text>
                </View>

                <View>
                    <View>
                        <Text style={{ fontSize: 14, color: 'red' }} >{`截止期限-${deadline}`}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 100,
        marginVertical: 5,
        backgroundColor: '#ffb6c1'
    },
    todoContent: {
        flex: 0.9
    },
    unCompletedtitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    tagTitle: {
        // alignSelf: 'flex-start', 
        backgroundColor: '#fafad2',
        borderRadius: 5,
        paddingVertical: 3
    },
    imageCheck: {
        width: 38,
        height: 38,
        margin: 5,
        borderRadius: 35
    }
})