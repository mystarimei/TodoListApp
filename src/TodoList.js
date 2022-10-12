import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    const { todos, handlePress, handleDelete, handleToUpdate } = props;
    const unCompletedTodos = todos.filter((todo) => todo.completed === false);
    const completedTodos = todos.filter((todo) => todo.completed === true);
    return (
        <View style={styles.continer}>

            <Text style={styles.todoTitle}>未完成</Text>
            <ScrollView>
                <View style={{ marginHorizontal: 10 }}>
                    {unCompletedTodos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} onPress={handlePress} onDelete={handleDelete} onUpdate={handleToUpdate} />
                    })}
                </View>
            </ScrollView>

            <Text style={styles.todoTitle}>已完成</Text>
            <ScrollView>
                <View style={{ marginHorizontal: 10 }}>
                    {completedTodos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onPress={props.handlePress} onDelete={props.handleDelete} onUpdate={handleToUpdate} />
                    ))}
                </View>
            </ScrollView>

        </View >
    )
}

// export default class TodoList extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     componentDidMount() {
//         this.props.navigation.setParams({
//             rightTitle: '新增',
//             onRight: () => {
//                 Actions.push('TodoForm', { handleAddTodo: this.props.handleAddTodo });
//             },
//             left: <View style={{ padding: 10 }}><Text>C107156123</Text><Text>潘旻緯</Text></View>,
//         });
//     }
//     render() {
//         const { todos, handlePress, handleDelete, handleToUpdate } = this.props;
//         const unCompletedTodos = todos.filter((todo) => todo.completed === false);
//         const completedTodos = todos.filter((todo) => todo.completed === true);
//         return (
//             <View style={styles.continer}>

//                 <Text style={styles.todoTitle}>未完成</Text>
//                 <ScrollView>
//                     <View style={{ marginHorizontal: 10 }}>
//                         {unCompletedTodos.map((todo) => {
//                             return <TodoItem key={todo.id} todo={todo} onPress={handlePress} onDelete={handleDelete} onUpdate={handleToUpdate} />
//                         })}
//                     </View>
//                 </ScrollView>

//                 <Text style={styles.todoTitle}>已完成</Text>
//                 <ScrollView>
//                     <View style={{ marginHorizontal: 10 }}>
//                         {completedTodos.map((todo) => (
//                             <TodoItem key={todo.id} todo={todo} onPress={this.props.handlePress} onDelete={this.props.handleDelete} onUpdate={handleToUpdate} />
//                         ))}
//                     </View>
//                 </ScrollView>

//             </View >
//         )
//     }
// }

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: '#ffb6c1'
    },
    todoTitle: {
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
        padding: 10,
    }
})
export default TodoList;