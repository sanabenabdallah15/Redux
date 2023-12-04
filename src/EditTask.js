// EditTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const EditTask = ({ task, onCancel }) => {
  const dispatch = useDispatch();
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEditTask = () => {
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        id: task.id,
        description: editedDescription,
      },
    });
    onCancel();
  };

  return (
    <div>
      <input
        type="text"
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      />
      <button onClick={handleEditTask}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditTask;
