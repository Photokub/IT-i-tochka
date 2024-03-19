import React, { useEffect, useState } from 'react';
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

interface IClassesParsed {
  classes: { id: number; name: string; image: string; }[];
}

function App() {

  const [headerElement, setHeaderElement] = useState<any>({});
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const classes = ClassesList.classes
  console.log(classes)

  //логика Header START//
  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement;
    setHeaderElement(header)
  }, [])

  const headerTop = headerElement.offsetTop

  function headerTopFix() {
    if (window.scrollY >= headerTop) {
      headerElement.classList.add("header_sticky");
    } else {
      headerElement.classList.remove("header_sticky");
    }
  }

  window.onscroll = function () { headerTopFix() };

  //логика Header END//

  //Определение размеров окна START//
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  });

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  //Определение размеров окна END//

  return (
    <>
      <Header
        windowSize={windowSize}
      />
      <div className="app">
        <Main />
        <Classes
          ClassesListArray={classes}
        />
        <Location />
      </div>
    </>
  );
}

export default App;
