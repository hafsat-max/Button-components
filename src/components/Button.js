import React from 'react'

import "../App.css";

 
 const Button = ({color, iconleft, iconright, caption, text}) => {
    console.log(color)
  return (
    <div>
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