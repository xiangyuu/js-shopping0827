import React from 'react';
import shop01 from '../static/pictures/001.webp'
import shop02 from '../static/pictures/002.webp'
import shop03 from '../static/pictures/003.webp'
import shop04 from '../static/pictures/004.webp'
import shopping from '../static/pictures/shopping.png'
import './Card.scss'
function Card(props) {

  return (
      <div className='card'>
        <img src={shop01} alt=''/>
        <div className='shopping'>
          <img onClick={props.addProduct} src={shopping} alt=''/>
        </div>
        <div>
            <span>
              Joined® Authentic 寬版上衣【OS綠】NT$1,180
            </span>
        </div>
      </div>
  );
}

export default Card;