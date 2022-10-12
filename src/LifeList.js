import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView,Dimensions } from 'react-native';
import LifeItem from './LifeItem'
import titlebackground from './images/3.jpg'

const LifeList = (props) => {
    const { todos } = props
    const unCompletedTodos = todos.filter((todo) => todo.completed === false);
    const unCompletedLifes = unCompletedTodos.filter((todo) => todo.type === 'life');
    return (
        <View style={styles.continer}>
             <Image source={titlebackground} style={{ width: Dimensions.get('window').width, height: 200}} />
            <ScrollView>
                <View style={{marginHorizontal:10}}>
                    {unCompletedLifes.map((todo) => {
                        return <LifeItem key={todo.id} todo={todo} onPress={props.handlePress} />
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: '#ffb6c1'
    },
})

export default LifeList;