import React from 'react'

import "../App.css";

 
export const Button = ({color, iconleft, iconright, caption, text}) => {
    console.log(color)
  return (
    <div className='fig-button'>
    <h4 className='caption'>{caption}</h4>
    <button className={`${color}` } > 
        {iconleft && <i className="fa-solid fa-cart-shopping"></i>}
        {text}
        {iconright && <i className="fa-solid fa-cart-shopping"></i>}
    </button>
    </div>
  )
}

export default Button;