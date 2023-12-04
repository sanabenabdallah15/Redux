import React from 'react';
import { Provider } from 'react-redux';
import store from './JS/store';
import AddTask from './Addtask';
import ListTask from './ListTask';
import "./App.css"

const App = () => {
  return (
   
    <Provider store={store}>
      <div>
        
        <p className='title'>ToDo List</p>
        <div className='box'>
        <AddTask />
        <ListTask />
        
      </div>
      </div>
    </Provider>
    
  );
};

export default App;
