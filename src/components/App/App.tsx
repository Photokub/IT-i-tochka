import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from '../Main/Main';
import Classes from '../Classes/Classes';
import Location from "../Location/Location"
import ClassesList from '../../data/ClassesList.json'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [isHeaderPearent, setIsHeaderParent] = useState<boolean>(true)

  const burger = document.querySelector(".burger__container__input") as HTMLInputElement
  const page = document.body

  const classes = ClassesList.classes

  //логика взаимодействия Burger и Header START //

  const handleChangeBurger = (event: any) => {
    if (event.target.checked) {
        page.style.overflowY = 'hidden'
    } else {
        page.style.overflowY = 'scroll'
    }
    setIsSubscribed(current => !current);
};

  const closeMenu = () => {
    if (burger.checked) {
      page.style.overflowY = 'scroll'
    } else {
      page.style.overflowY = 'hidden'
    }
    setIsSubscribed(current => !current);
  }

 useEffect(() => {
  !isSubscribed ? setIsHeaderParent(true) : setIsHeaderParent(false)
 },[isSubscribed])

  const handleCloseMenu = () =>{
    {windowSize!.innerWidth! <= 984 && setTimeout(closeMenu, 200)}
}

 //логика взаимодействия Burger и Header END //
  

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
        isSubscribed={isSubscribed}
        handleChangeBurger={handleChangeBurger}
        handleCloseMenu={handleCloseMenu}
        isHeaderPearent={isHeaderPearent}
      />
      <div className="app">
        <Main />
        <Classes
          ClassesListArray={classes}
        />
        <Location />
        <Footer />
      </div>
    </>
  );
}

export default App;
