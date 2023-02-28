import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState('')
  const [taskItems, setTaskItems] = useState([])

  function handleAddTask() {
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  function handleChange(text) {
    setTask(text)
  }

  function completeTask(index) {
      let itemsCopy = [...taskItems]
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy)
  }
  
  

 


  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Notes</Text>

        <View style={styles.items}>
           {
            taskItems.map((item, index) => {
              return (
              <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} />
              </TouchableOpacity>)
              
              
            })
           }
        </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
          <TextInput onChangeText={handleChange} value={task} style={styles.input} placeholder='write a task' />

          <TouchableOpacity onPress={() => handleAddTask()} style={styles.addWrap}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   },

   taskWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
   },

   sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
   },

   items: {
      marginTop: 30,
   },

   writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
   },

   input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    width: 250,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,

   },

   addWrap: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
   },

   addText: {}
});
