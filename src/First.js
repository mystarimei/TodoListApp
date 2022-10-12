import React from 'react';
import { Alert, Text, View } from 'react-native';
import { Router, Tabs, Stack, Scene } from 'react-native-router-flux';
import TodoList from './TodoList';
import Life from './LifeList';
import Work from './WorkList';
import Entertainment from './EntertainmentList';
import TodoForm from './TodoForm';
import TodoUpDate from './TodoUpDate'
import { Actions } from 'react-native-router-flux';
import TodoItem from './TodoItem';

const TabIcon = (props) => (
    // 自定義 Tab 的項目時，props 內已擁有 focused 與 title 資料可用來判斷點擊的 Tab 並標示顏色
    <Text style={{ color: props.focused ? 'blue' : 'black' }}>{props.title}</Text>
);

export default class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    type: 'life',
                    title: '買東西',
                    time: '6/7',
                    deadline: '6/30',
                    completed: true,
                },
                {
                    id: 2,
                    type: 'entertainment',
                    title: '買水果',
                    time: '5/20',
                    deadline: '5/24',
                    completed: true,
                },
                {
                    id: 3,
                    type: 'work',
                    title: '繳交企劃書',
                    time: '5/15',
                    deadline: '6/16',
                    completed: false,
                },
                {
                    id: 4,
                    type: 'life',
                    title: '煮飯',
                    time: '6/2',
                    deadline: '6/3',
                    completed: false,
                },
                {
                    id: 5,
                    type: 'entertainment',
                    title: '去唱歌',
                    time: '6/4',
                    deadline: '6/7',
                    completed: false,
                },
                {
                    id: 6,
                    type: 'work',
                    title: '報告企畫書',
                    time: '7/1',
                    deadline: '6/8',
                    completed: false,
                },
                {
                    id: 7,
                    type: 'entertainment',
                    title: '看報紙',
                    time: '5/30',
                    deadline: '6/6',
                    completed: false,
                },
                {
                    id: 8,
                    type: 'entertainment',
                    title: 'LOL比賽',
                    time: '6/19',
                    deadline: '6/25',
                    completed: false,
                },
                {
                    id: 9,
                    type: 'work',
                    title: '完成實作',
                    time: '8/31',
                    deadline: '9/10',
                    completed: true,
                },
                {
                    id: 10,
                    type: 'life',
                    title: '運動',
                    time: '6/10',
                    deadline: '6/30',
                    completed: false,
                }, {
                    id: 11,
                    type: 'life',
                    title: '看書',
                    time: '6/7',
                    deadline: '6/8',
                    completed: false,
                }, {
                    id: 12,
                    type: 'life',
                    title: '做家務',
                    time: '6/15',
                    deadline: '6/30',
                    completed: false,
                },
            ]
        }
    }

    // componentDidMount() {
    //     this.props.navigation.setParams({
    //         rightTitle: '新增',
    //         onRight: () => {
    //             Actions.TodoForm({ handleAddTodo: this.handleAddTodo });
    //         },
    //         left: <View><Text>C107156123</Text><Text>潘旻緯</Text></View>,
    //     });
    // }

    handlePress = (id) => {
        const newTodos = this.state.todos.map((todo) => {
            return todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
        });
        this.setState({
            todos: newTodos,
        });
    };

    handleToUpdate = (id) => {
        const { todos } = this.state;
        const todo = todos.find((todo) => id === todo.id);
        console.log(todo)
        Actions.push('TodoUpDate', { todo: todo, handleUpDate: this.handleUpDate });
    }

    handleDelete = (id) => {
        const newTodos = this.state.todos.map((todo) => {
            return todo.id === id ? { ...todo, delete: true } : { ...todo, delete: false }
        });
        this.setState({
            todos: newTodos.filter((todo) => {
                return todo.delete === false
            }),
        });
    };

    handleAddTodo = (todo) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: this.state.todos.length + 1,
                    time: new Date().getMonth() + 1 + '/' + new Date().getDate(),
                    ...todo,
                },
            ],
        });
    };

    handleUpDate = (data) => {
        const newTodos = this.state.todos.map((todo) => {
            return todo.id === data.id ? { ...todo, type: data.type, title: data.title, deadline: data.deadline } : { ...todo }
        })
        this.setState({
            todos: newTodos
        });
    }

    render() {
        const { todos } = this.state
        return (
            <Router>
                <Tabs headerLayoutPreset="center" tabBarPosition="bottom" showLabel={false}>
                    <Stack key="root" title="首頁" icon={TabIcon}>
                        <Scene todos={todos} key="TodoList" title="代辦事項" component={TodoList} initial
                            // rightTitle={'新增'}
                            // onRight={()=>{
                            //     Actions.TodoForm()
                            // }}
                            left={<View style={{ padding: 10 }}><Text>C107156123</Text><Text>潘旻緯</Text></View>}
                            handlePress={this.handlePress}
                            handleDelete={this.handleDelete}
                            handleToUpdate={this.handleToUpdate}
                            handleAddTodo={this.handleAddTodo}
                        />
                         {/* <Scene key="TodoForm" title="新增表單" component={TodoForm} icon={TabIcon} renderLeftButton={null} handleAddTodo={this.handleAddTodo} /> */}
                        <Scene key="TodoUpDate" title="修改內容" component={TodoUpDate} renderLeftButton={null} back />
                    </Stack>
                    <Scene todos={todos} key="Life" title="生活" component={Life} icon={TabIcon} renderLeftButton={null} handlePress={this.handlePress} />
                    <Scene todos={todos} key="Work" title="工作" component={Work} icon={TabIcon} renderLeftButton={null} handlePress={this.handlePress} />
                    <Scene todos={todos} key="Entertainment" title="娛樂" component={Entertainment} icon={TabIcon} renderLeftButton={null} handlePress={this.handlePress} />
                    <Scene key="TodoForm" title="新增表單" component={TodoForm} icon={TabIcon} renderLeftButton={null} handleAddTodo={this.handleAddTodo} />
                </Tabs>
            </Router>
        );
    }
}

