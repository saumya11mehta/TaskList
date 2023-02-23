import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';

type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

const JsonAPI = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      setTodo(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const sendDeleteRequest = async () => {
    try {
      const response = await axios.delete(
        'https://jsonplaceholder.typicode.com/todos/1'
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const sendPostRequest = async () => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        {
          title: 'foo',
          completed: false,
          userId: 1,
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const sendPutRequest = async () => {
    try {
      const response = await axios.put(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    //   setPosts(response.data);
    //   console.log(response);
    // });
    sendGetRequest();
  }, []);

  return (
    <div>
      <ul className="todoList">
        {todo.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>

    </div>
  );
};

export default JsonAPI;