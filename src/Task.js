// Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import EditTask from './EditTask';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditTask task={task} onCancel={handleCancelEdit} />
      ) : (
        <>
        
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.date}
          </span>
          <button onClick={handleEditClick}>Edit</button>
        
        </>
      )}
    </div>
  );
};

export default Task;
