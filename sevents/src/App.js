import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Typography, Toolbar, Container} from '@material-ui/core';
import Circle from './components/Circle';

function App() {
  return (
    <div className="App">
    <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Círculo
          </Typography>
        </Toolbar>
      </AppBar>
      <Circle/>
    </div>
  );
}

export default App;
