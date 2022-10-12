import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView, Dimensions } from 'react-native';
import EntertainmentItem from './EntertainmentItem'
import titlebackground from './images/5.jpg'

const EntertainmentList = (props) => {
    const { todos } = props
    const unCompletedTodos = todos.filter((todo) => todo.completed === false);
    const unCompletedLifes = unCompletedTodos.filter((todo) => todo.type === 'entertainment');
    return (
        <View style={styles.continer}>
            <Image source={titlebackground} style={{ width: Dimensions.get('window').width, height: 200 }} />
            <ScrollView>
                <View>
                    {unCompletedLifes.map((todo) => {
                        return <EntertainmentItem key={todo.id} todo={todo} onPress={props.handlePress} />
                    })}
                </View>
            </ScrollView>
        </View>
    )
}
export default EntertainmentList;

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: '#ffb6c1'
    },
})