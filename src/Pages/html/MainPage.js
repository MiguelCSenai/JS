import '../css/MainPage.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstExercise from '../../Exercises/FirstExercise';
import SecondExercise from '../../Exercises/SecondExercise';

function MainPage() {
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <br/><br/><br/>
    <FirstExercise/>
    <br/><br/><br/>
    <SecondExercise/>
  </React.StrictMode>
);

}

export default MainPage;
