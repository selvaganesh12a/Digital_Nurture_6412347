import React from 'react';
import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <CohortDetails name="Digital Nurture" status="Ongoing" />
      <CohortDetails name="Java Developer" status="Completed" />
    </div>
  );
}

export default App;
