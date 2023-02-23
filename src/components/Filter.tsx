import React, { useContext } from 'react';
import TaskListContext from '../context/TaskListContext';

type Props = {
    categories: Array<any>;
};

const Filter = (props:Props) => {
    const { hanldeHideTask } = useContext(TaskListContext);
    return (
        <div className='filterContainer'>
            <select onChange={(event)=>{hanldeHideTask(event?.target.value)}}>
                <option value="">Select a category to filter...</option>
                {props.categories.map((t) => (<option value={t.id}>{t.title}</option>))}
            </select>
        </div>
    )
};

export default Filter;