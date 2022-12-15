import React from 'react';
import './App.css';
import Paper from '@mui/material/Paper';
import { ToDoTabs } from './components/ToDoTabs';

function App() {
  return (
    <div className="App">
      <Paper 
      sx={{width: '800px', height: '600px', padding: '5px 20px',
      '@media (max-width: 640px)': {width: '90%', height: '90vh', overflowY: 'scroll', paddingRight:'10px', paddingLeft:'10px'}
      }}>
        <ToDoTabs/>
      </Paper>
    </div>
  );
}

export default App;
