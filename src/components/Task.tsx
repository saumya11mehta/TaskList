import React, { useContext } from 'react';
import TaskListContext from '../context/TaskListContext';

type Props = {
    taskname: string;
    id:string;
    data: Array<string>;
};

//task component containing individual task list
const Task = (props:Props) => {
    const { handleDeleteTask } = useContext(TaskListContext);
    return (
        <div className="listItems">
            <span className="itemName">{props.taskname}</span>
            <span className="itemButtonContainer">
                <button className="removeTask" onClick={()=>handleDeleteTask(props.id,props.taskname,props.data)}>x</button>
            </span>
        </div>
    );
}

export default Task;