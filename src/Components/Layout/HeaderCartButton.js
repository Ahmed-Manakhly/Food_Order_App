import Classes from './HeaderCartButton.module.css' ;
import React , {useContext , useState ,  useEffect}from 'react' ;
import CartIcon from '../Cart/CartIcon' ;
import CartContext from '../../Store/cart-context';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext) ;
    const numberOfCartItems = cartCtx.items.reduce( (curNumber , item) => {
        return curNumber + item.amount;
    } , 0) ;
    //-----------------------------------//-----------------------------------
    
    const [buttonIsHighlighted , setButtonIsHighlighted] = useState(false) ;
    
    const buttonClasses = `${Classes.button} ${buttonIsHighlighted? Classes.bump : ''} ` ;

    const {items} = cartCtx

    useEffect( ()=> {
        if(items.length === 0){
            return ;
        }
        setButtonIsHighlighted(true) ;
        const timer = setTimeout(()=>{
            setButtonIsHighlighted(false) ;
        },300);
        return () => {
            clearTimeout(timer) ;
        }

    } , [items] ) ;

    //-----------------------------------//-----------------------------------
    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={Classes.icon}>
            <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={Classes.badge}>{numberOfCartItems}</span>
        </button>
    );
} ;

export default HeaderCartButton ;