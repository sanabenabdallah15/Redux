// ListTask.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
const ListTask = () => {
  const tasks = useSelector(state => {
    if (state.filter === 'all') return state.tasks;
    return state.tasks.filter(task => (state.filter === 'done' ? task.isDone : !task.isDone));
  });

  const dispatch = useDispatch();

  const handleToggleTask = (id) => {
    dispatch({
      type: 'TOGGLE_TASK',
      payload: id,
    });
  };

  const handleFilterChange = (filter) => {
    dispatch({
      type: 'SET_FILTER',
      payload: filter,
    });
  };

  return (
    <div>
      <div className='task'>
        <h3 className='texte'>Show Tasks:</h3>
        <select onChange={(e) => handleFilterChange(e.target.value)} className='select'>
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="notDone">Not Done</option>
        </select>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
              onClick={() => handleToggleTask(task.id)}
            >
            <div className='name'>
            {task.name}
            </div>
            <div className='details'>
              {task.description}
              </div>
              <div className='details'>  
              {task.date}
              </div>
           
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
