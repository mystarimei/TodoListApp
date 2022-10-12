import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView, Dimensions } from 'react-native';
import WorkItem from './WorkItem'
import titlebackground from './images/4.jpg'

const WorkList = (props) => {
    const { todos } = props
    const unCompletedTodos = todos.filter((todo) => todo.completed === false);
    const unCompletedLifes = unCompletedTodos.filter((todo) => todo.type === 'work');
    return (
        <View style={styles.continer}>
            <Image source={titlebackground} style={{ width: Dimensions.get('window').width, height: 200 }} />
            <ScrollView>
                <View>
                    {unCompletedLifes.map((todo) => {
                        return <WorkItem key={todo.id} todo={todo} onPress={props.handlePress} />
                    })}
                </View>
            </ScrollView>
        </View>
    )
}
export default WorkList;

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: '#ffb6c1'
    },
})