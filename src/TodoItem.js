import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, Switch } from 'react-native';
import nocheck from './images/1.jpg'
import check from './images/2.jpg'
import deleteicon from './images/7.jpg';

const differentType = (type) => {
    switch (type) {
        case 'life':
            return '生活';
        case 'work':
            return '工作';
        case 'entertainment':
            return '娛樂';
    }
}

const differentTypeColor = (type) => {
    switch (type) {
        case 'life':
            return '#ffb6c1';
        case 'work':
            return '#ffe4e1';
        case 'entertainment':
            return '#ff69b4';
    }
}

export default function TodoItem(props) {
    const {
        todo: { id, type, title, deadline, time, completed },
        onPress, onDelete, onUpdate
    } = props;

    return (
        <TouchableOpacity onPress={() => onUpdate(id)}>
            <View style={[styles.content, { backgroundColor: differentTypeColor(type) }]}>

                <View style={{ flex: 0.2 }}>
                    <TouchableOpacity onPress={() => onPress(id)} >
                        <View >
                            <Image style={styles.image} source={completed ? check : nocheck} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.todoContent}>
                    <Text style={completed ? styles.completedTitle : styles.unCompletedtitle}>{title}</Text>
                    <Text style={{ fontSize: 14, color: '#a0522d' }} >{`截止期限-${deadline}`}</Text>
                </View>

                <View style={{ alignItems: 'center', }}>
                    <Text style={styles.tagTitle}>{differentType(type)}</Text>
                    <Text style={{ padding: 5 }}>{time}</Text>
                </View>

                <View>
                    <TouchableOpacity onPress={() => onDelete(id)}>
                        <View>
                            <Image source={deleteicon} style={styles.image} />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 50,
        marginVertical: 5,
    },
    todoContent: {
        flex: 0.8,
        alignSelf: 'center',
    },
    completedTitle: {
        fontSize: 20,
        color: '#696969',
        textDecorationLine: 'line-through',
    },
    unCompletedtitle: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    tagTitle: {
        backgroundColor: '#fafad2',
        borderRadius: 5,
        paddingVertical: 3
    },
    image: {
        width: 40,
        height: 40,
        margin: 5,
        borderRadius: 35
    }
})