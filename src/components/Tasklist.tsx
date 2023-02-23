import React, { useContext } from 'react';
import Task from './Task';
import TaskListContext from '../context/TaskListContext';

type Props = {
    title: string;
    tasks: Array<string>;
    id: string;
};

//Tasklist component for displaying the entrie tasklist
const Tasklist = (props:Props) => {
    const { handleAddTask } = useContext(TaskListContext);
    return (
        <div className={'tasklist category_'+props.id}>
            <h3 className='tasklist-name'>{props.title}</h3>
            <span className='task'>
                <div className='list'>
                    {
                        props.tasks.map(
                            (t,i) => (
                                <Task taskname={t} id={props.id} data={props.tasks} key={i.toString()}/>
                            )
                        )
                    }
                </div>
            </span>
            <input type="text" name={"task_"+props.id} id={"task_"+props.id} placeholder="Add new task..." />
            
            <button className='task-action increment' onClick={() => {
                let newTask =  (document.getElementById("task_"+props.id) as HTMLInputElement | null)?.value;
                console.log(newTask);
                let newTasks = props.tasks;
                if(newTask != null || newTask !== undefined){
                    newTasks.push(newTask)
                }
                console.log(newTasks);
                handleAddTask(props.id,[...newTasks]);
                (document.getElementById("task_"+props.id) as HTMLInputElement).value = ""
            }}>{' Add Task '}+{' '}</button>
        </div>
    );
};

export default Tasklist;