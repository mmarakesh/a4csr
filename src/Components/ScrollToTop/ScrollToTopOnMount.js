import { useEffect } from 'react';

function ScrollToTopOnMount() {
useEffect(() => {
    // Прокручиваем страницу вверх при монтировании компонента
window.scrollTo(0, 0);
}, []); // Пустой массив зависимостей означает, что эффект будет запущен только при монтировании компонента

return null; // Этот компонент не рендерит ничего, поэтому возвращаем null
}

export default ScrollToTopOnMount;