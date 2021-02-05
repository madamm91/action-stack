import './App.css';
import { ActionStack } from './ActionStack/ActionStack';
import React from 'react';
import { Visualizer } from './Visualizer/Visualizer';

function App() {
  return (
    <div className="App">
        <ActionStack initialState={{ greeting: 'Hello!'}}>
          <Visualizer>
          </Visualizer>
        </ActionStack>
    </div>
  );
}

export default App;
