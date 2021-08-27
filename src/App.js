import logo from './logo.svg';
import './App.scss';
import Card from "./component/Card";
import ShoppingCar from "./component/ShoppingCar";
import checked from './static/pictures/checked.png'
import {useState} from "react";

function App() {
    const shoppingData = [
        {
            id: 1,
            title: 'cloth1',
            image: 'shop01',
            cost: 1180
        },
    ];

    const [products, setProducts] = useState(shoppingData);
    const [isShow, setIsShow] = useState(false)

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id))
    }

    const addProduct = (product) => {
        setProducts([...products, {
            id: products.length + 1,
            title: 'cloth1',
            image: 'shop01',
            cost: 1000
        }])

    }

    return (
        <div className="App">
            <div className='home-container'>
                <div className='title'>
                    <span>漁夫の運動服飾專賣店</span>
                    <img onClick={() => {
                        setIsShow(!isShow)
                    }} src={checked} alt=''/>
                </div>
                <div className='main'>
                    <Card addProduct={addProduct}/>
                    <Card addProduct={addProduct}/>
                    <Card addProduct={addProduct}/>
                    <Card addProduct={addProduct}/>
                    <Card addProduct={addProduct}/>
                    <Card addProduct={addProduct}/>
                    <ShoppingCar deleteProduct={deleteProduct} isShow={isShow} products={products}/>
                </div>
            </div>

        </div>
    );
}

export default App;
