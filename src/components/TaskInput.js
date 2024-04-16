import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        dispatch(addTask(task));
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={handleChange} placeholder="Add a task" />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskInput;
