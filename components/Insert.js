import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const Insert = ({ onAddTodo }) => {
  const [TodoItem, setTodoItem] = useState('');

  const InputHandler = (Todo) => {
    setTodoItem(Todo);
  };

  const addHandler = () => {
    onAddTodo(TodoItem);
    setTodoItem('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="일정을 추가하세요!"
        value={TodoItem}
        onChangeText={InputHandler}
        placeholderTextColor={'#999'}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={'ADD'} onPress={addHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default Insert;
