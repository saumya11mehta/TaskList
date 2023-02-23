import { createContext } from 'react';

const TaskListContext = createContext({
  tasklist: [
        {
                title: '',
                tasks: [''],
                id: '',
                show:true,
        }
    ],
  handleAddCategory: (title: string) => {},
  handleAddTask: (id: string, data: Array<string>) => {},
  hanldeHideTask: (id: string) => {},
  handleDeleteTask: (id:string,taskname:string,data: Array<string>) => {},
});

export default TaskListContext;