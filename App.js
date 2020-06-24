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
  Text,
  StatusBar,
  Button,
  TextInput 
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import { Container} from 'native-base';

class App  extends React.Component{
  constructor(props){
    super(props)
    this.state={
      todos:[],
      // name:'Nameer Waqas'
    }
    this.name = 'Todo List'
  }
  render(){
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Text
          style={{backgroundColor:'orange',fontWeight:'bold',fontSize:50,color:Colors.white}}>
            {this.name}</Text>
         <View style={{display:'flex',flexDirection:'row'}}>
           <TextInput  style={{backgroundColor:'teal',flex:3}} placeholder='name'/>
          <Button style={{flex:1}}
          title='Press Me Dear'/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'red',
    width:'100%',
    // fontSize: 
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
