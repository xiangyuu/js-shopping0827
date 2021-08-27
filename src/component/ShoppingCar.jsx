import React,{useState} from 'react';
import garbage from '../static/pictures/garbage.png'
import shop01 from '../static/pictures/001.webp'
import shop02 from '../static/pictures/002.webp'
import shop03 from '../static/pictures/003.webp'
import shop04 from '../static/pictures/004.webp'
import './ShoppingCar.scss'

function ShoppingCar(props) {
    return(

    <div className='shopping-car' className={props.isShow ? 'show' : 'hide'}>
        {
            props.products.map((value, key) => (
                <div key={key} className='shopping-item'>
                    <div className='cloth-img'>
                        <img src={value.image} alt=''/>
                    </div>
                    <div className='cloth-txt'>
                        <span>{value.title}</span>
                        <h3>S</h3>
                        <div className='cloth-money'>1 x NT${value.cost}<img onClick={()=>props.deleteProduct(value.id)} src={garbage} alt=''/>
                        </div>
                    </div>
                </div>
            ))
        }

        <div className='checkout'>
            訂單結帳
        </div>
    </div>)
};

export default ShoppingCar;