import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import FirstExercise from './Exercises/FirstExercise';
import SecondExercise from './Exercises/SecondExercise';
import ThirdExercise from './Exercises/ThirdExercise'
import FourthExercise from './Exercises/FourthExercise'
import FifthExercise from './Exercises/FifthExercise';
import SixthExercise from './Exercises/SixthExercise';
import SeventhExercise from './Exercises/SeventhExercise';
import NavBarComponent from './Components/NavBarComponent';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './Pages/html/MainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <div></div>,
  },
  {
    path: "/teste",
    element:  <div>Testado</div>,
  },
  {

    path: "/exercicio1",
    element: <FirstExercise/>,

  },
  {

    path: "/exercicio2",
    element: <SecondExercise/>,

  },
  {

    path: "/exercicio3",
    element: <ThirdExercise/>,

  },
  {

    path: "/exercicio4",
    element: <FourthExercise/>,

  },
  {

    path: "/exercicio5",
    element: <FifthExercise/>,

  },
  {

    path: "/exercicio6",
    element: <SixthExercise/>,

  },
  {

    path: "/exercicio7",
    element: <SeventhExercise/>,

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NavBarComponent/>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
