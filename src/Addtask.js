import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import Modal from 'react-modal';
const AddTask = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [name,setName]=useState('');
  const [description, setDescription] = useState('');
  const [date,setDate]=useState('')
  const handleClick = () => {
    setIsModalOpen(!isModalOpen)
}
  const handleAddTask = () => {
    if (description.trim() !== '') {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          id: Date.now(),
          description,
          name,
          date,
          isDone: false,
        },
      });
      setDescription('');
      setDate('');
      setName(' ');
      handleClick();
    }
  };

  return (
    <>
      <button className='button' onClick= {()=>handleClick()} >Add Task</button>
      
      <Modal
      isOpen={isModalOpen}
    
       
        >
    <div className='forms'>
        
        <span>
            Name :  
        </span>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='input'/>
      <span>
            Description:  
        </span>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}className='input'  />
      <span>
            Date:  
        </span>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className='input'/>
      <button onClick={handleAddTask} className='button'>Add Task</button>
    </div>
    </Modal>
    </>
  );
};

export default AddTask;