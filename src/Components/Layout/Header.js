import React ,{Fragment}from 'react';
import Classes from "./Header.module.scss" ;
import mealsImage from '../../Assets/MealsImg.jpg' ;
import HeaderCartButton from './HeaderCartButton' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast} from '@fortawesome/free-solid-svg-icons'


const Header = props => {return (
    <Fragment>
        <header className={Classes.header}>
            <div className={Classes.container}>
            <div  className={Classes.brand}>
                <h1>Manakhly Meals</h1>
                <div><FontAwesomeIcon icon={faTruckFast} className='fa-lg fa-fw' /></div>
            </div>
            <HeaderCartButton onClick = {props.onShowCart}/>
            </div>
        </header>
        <div className={Classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
    </Fragment>
)} ;
export default Header ;