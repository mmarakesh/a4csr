import React, { useState, useEffect } from 'react';
import "./Scroll.css";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Показываем или скрываем кнопку при прокрутке страницы
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 300) { // Например, показываем кнопку, когда прокрутка больше 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Прокручиваем страницу в начало
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <button onClick={scrollToTop} className='scrollStyleButton'>
            <svg color="#78c795" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
            </svg>
        </button>
      }
    </div>
  );
}

export default ScrollToTopButton;
