import React, { useEffect, useRef } from 'react'

const Transition = (props) => {
    const { children, className, active, onClick } = props;
    const elem = useRef(null);
    useEffect(()=>{
      if (elem.current && active) {
          elem.current.classList.add('active');
          setTimeout(() => {
            elem.current.style.display = 'none';
          }, 500);
      } else if(elem.current && !active) {
        elem.current.removeAttribute('style')
        setTimeout(() => {
          elem.current.classList.remove('active');
        }, 100);
      }
    }, [active])
  return (
    <div ref={elem} className={className} onMouseDown={onClick}>{children}</div>
  )
}

export default Transition