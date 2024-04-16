import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(deleteTask(index));
    };

    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
