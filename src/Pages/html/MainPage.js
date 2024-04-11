import '../css/MainPage.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstExercise from '../../Exercises/FirstExercise';
import SecondExercise from '../../Exercises/SecondExercise';
import ThirdExercise from '../../Exercises/ThirdExercise';
import FourthExercise from '../../Exercises/FourthExercise';
import FifthExercise from '../../Exercises/FifthExercise'

function MainPage() {
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <br/><br/><br/>
    <FirstExercise/>
    <br/><br/><br/>
    <SecondExercise/>
    <br/><br/><br/>
    <ThirdExercise/>
    <br/><br/><br/>
    <FourthExercise/>
    <br/><br/><br/>
    <FifthExercise/>
  </React.StrictMode>
);

}

export default MainPage;
