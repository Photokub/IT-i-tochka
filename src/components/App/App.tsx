import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from '../Main/Main';
import Classes from '../Classes/Classes';
import Location from "../Location/Location"
import ClassesList from '../../data/ClassesList.json'
import Header from '../Header/Header';

type IClassCard = {
  id: number,
  name: string,
  image: string
}

interface IClassesParsed  {
   classes: { id: number; name: string; image: string; }[]; 
}

function App() {

  const classes = ClassesList.classes
  console.log(classes)

  return (
    <div className="app">
      <Header />
      <Main />
      <Classes
        ClassesListArray={classes}
      />
      <Location />
    </div>
  );
}

export default App;
