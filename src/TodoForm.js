import React from 'react';
import { StyleSheet, View, Switch, TextInput, Picker, Button, Text, ImageBackground, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Background from './images/8.jpg'

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 初始待辦類型
      type: 'life',
      // 初始待辦標題
      title: null,
      // 待辦備註
      deadline: null,
      // 待辦是否完成
      completed: false,
    };
  }

  // 變更待辦類型的選取值
  handleChangeType = (value) => {
    this.setState({
      type: value,
    });
  };

  // 變更待辦標題的文字
  handleChangeTitle = (text) => {
    this.setState({
      title: text,
    });
  };

  // 變更待辦備註的文字
  handleChangedeadline = (text) => {
    this.setState({
      deadline: text,
    });
  };

  // 變更是否完成的開關值
  handleChangeCompleted = (value) => {
    this.setState({
      completed: value,
    });
  };

  // 新增待辦按鈕點擊時觸發的 Callback 事件
  handleAddPress = () => {
    const { handleAddTodo } = this.props;
    // 返回前一個頁面
    Actions.pop();
    // 呼叫子元件所傳入的事件並將表單的輸入內容帶入參數回傳回去
    handleAddTodo(this.state);
    // 新增待辦事項後將表單設定回到初始預設值
    this.setState({
      type: 'life',
      title: null,
      deadline: null,
      completed: false,
    });
  };

  render() {
    const { type, title, deadline, completed } = this.state;

    return (
      <View style={styles.container}>
        <ImageBackground source={Background} style={{ width: Dimensions.get('window').width, height: 552 }}>
          <View>
            <View style={styles.item}>
              <Text style={styles.label}>待辦類型</Text>
              <Picker
                selectedValue={type}
                onValueChange={this.handleChangeType}
                style={styles.picker}>
                <Picker.Item label="生活" value="life" />
                <Picker.Item label="工作" value="work" />
                <Picker.Item label="娛樂" value="entertainment" />
              </Picker>
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>待辦標題</Text>
              <TextInput
                value={title}
                onChangeText={this.handleChangeTitle}
                style={styles.textInput}
              />
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>截止期限</Text>
              <TextInput
                value={deadline}
                onChangeText={this.handleChangedeadline}
                style={styles.textInput}
              />
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>是否完成</Text>
              <Switch
                value={completed}
                onValueChange={this.handleChangeCompleted}
                style={styles.switch}
              />
            </View>
          </View>
          <Button title="新增待辦" disabled={!title || !deadline} onPress={this.handleAddPress} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  picker: {
    width: 150,
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    marginLeft: 15,
  },
  switch: {
    marginLeft: 10,
  },
});
