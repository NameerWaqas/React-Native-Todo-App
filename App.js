/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  AsyncStorage,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  Container, Content, Item, Input, Button, Text, Header
  , Card, CardItem, Body,Toast,Root
} from 'native-base';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      todoTitle: "xyz",
      todoBody: "",
      todoUpdate: 'noUpdate',
      // todoInputdefaultValue:''
    }
    this.name = 'Todo List'
  }
  
  addTodo = () => {
    this.state.todos.push({ title: this.state.todoTitle, todo: this.state.todoBody })
    this.showtoast('Added task successfully','success')
    this.setState({
      ...this.state
    })
  }
  
  deleteTodo = (id) => {
    this.state.todos.pop(id)
    this.showtoast('Your task has been delete','danger')
    this.setState({
      ...this.state
    })
  }
  
  updateTodo = () => {
    this.state.todos[this.state.todoUpdate].todo = this.state.todoBody
    this.state.todoUpdate = 'noUpdate'
    this.showtoast('Task updated successfully','success')
    this.setState({
      ...this.state
    })
  }

  triggerUpdate = (id)=>{
    this.state.todoUpdate = id
    this.showtoast('Update the task at top','warning')
    this.setState({
      ...this.state
    })
  }

  handleTitleText = (text) => {
    this.state.todoTitle = text
    this.setState(
      { ...this.state }
    )
  }
  handleTodoText = (text) => {
    this.state.todoBody = text
    this.setState({
      ...this.state
    })
  }

  showtoast=(message,color)=>{
    Toast.show({
      text: message,
      buttonText: 'Okay',
      type:color,
      duration:2000
    })
  }
  
  render() {
    
    console.ignoredYellowBox =true
    console.disableYellowBox = true


    return (
      <Root>
        <Header style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 40 }}>Todo App</Text>
        </Header>
        <ScrollView>
          <View>
            <Content padder>
              {
                this.state.todoUpdate != 'noUpdate' ?
                  <Item>
                    <Input placeholder={this.state.todos[this.state.todoUpdate].title}
                      disabled />
                  </Item> :
                  <Item>
                    <Input placeholder="Enter title of todo.." 
                      onChangeText={(text) => this.handleTitleText(text)}
                    />
                  </Item>
              }
            </Content>
            <Content padder>
              <Item>
                <Input placeholder="Write your task here.."
                  onChangeText={(text) => this.handleTodoText(text)} />
              </Item>
            </Content>
            <Content padder>
              {
                this.state.todoUpdate != 'noUpdate' ?
                  <Button block success onPress={() => this.updateTodo()}>
                    <Text>Update Todo</Text>
                  </Button> :
                  <Button block success onPress={() => this.addTodo()}>
                    <Text>Add Todo</Text>
                  </Button>
              }

            </Content>
            <Content>
              {
                this.state.todos.map((obj, id) => {
                  return <SimpleCard title={obj.title} todo={obj.todo}
                    del={this.deleteTodo} key={id} id={id} upd= {this.triggerUpdate}/>
                }
                )
              }
            </Content>
          </View>
        </ScrollView>
      </Root>
    );
  };
};

const styles = StyleSheet.create({
});

export default App;

function SimpleCard(props) {
  return (
    <Content padder>
      <Card>
        <CardItem header bordered>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{props.title}</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>
              {props.todo}
            </Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Button block warning style={{ flex: 1, margin: 1 }}
          onPress={()=>props.upd(props.id)}><Text>Edit</Text></Button>
          <Button block danger style={{ flex: 1, margin: 1 }} onPress={() => props.del(props.id)}><Text>Delete</Text></Button>
        </CardItem>
      </Card>
    </Content>
  )
}