import React from 'react';

type TodoProps = {
  todo: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
};

const Todo = ({ todo }: TodoProps) => {
  return (
      <li className={todo.completed === true ? "checked":""}>
        {todo.id} - {todo.title} <span className="close">×</span>
      </li>
  );
};

export default Todo;