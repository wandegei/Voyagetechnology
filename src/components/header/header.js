import FirstHeader from './firstHeader';
import SecondHeader from './secondHeader';
import '../../css/header.css';
import { useEffect, useState } from 'react';

const Header = () => {
  let oldScrollY = 0;

  const [direction, setDirection] = useState('down');

  const controlDirection = () => {
    if (window.pageYOffset === 0) {
      setDirection('down');
      const elem = document.getElementById('header');
      elem.style.backgroundColor = '#02A2AC';
    } else {
      if (window.scrollY > oldScrollY) {
        setDirection('up');
        const elem = document.getElementById('header');
        elem.style.backgroundColor = 'white';
      } else {
        setDirection('up');
        const elem = document.getElementById('header');
        elem.style.backgroundColor = 'white';
      }
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', controlDirection);
    return () => {
      window.removeEventListener('scroll', controlDirection);
    };
  },);

  return (
    <header className="header" id="header">
      <FirstHeader scrollState={direction} />
      <SecondHeader scrollState={direction} />
    </header>
  );
};

export default Header;