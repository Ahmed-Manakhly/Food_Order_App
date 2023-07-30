import Classes from './Cart.module.css';
import Modal from '../UI/Modal'
import React,{useContext , useState} from 'react' ;
import CartContext from '../../Store/cart-context' ;
import CartItem from './CartItem';
import Checkout from './Checkout' ;


const Cart = props => {
    const [isCheckout , setIsCheckout]=useState(false);
    const [isSubmitting , setIsSubmitting] = useState(false) ;
    const [didSubmit ,setDidSubmit] = useState(false) ;
    //---------------------------------------------------------------
    const cartCtx = useContext(CartContext) ;
    //-----------------------------------
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}` ;
    //-----------------------------------
    const hasItems = cartCtx.items.length > 0 ;
    //-----------------------------------
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id) ;
    } ;
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item , amount: 1})
    } ;
    //-----------------------------------------------------------------------------------
    const submitOrderHandler = async (userData)=>{
        setIsSubmitting(true)
        await fetch('https://movie-app-b7e60-default-rtdb.firebaseio.com/orders.json',{
            method:'POST',
            body: JSON.stringify({user : userData , orderedItems : cartCtx.items })
        });
        setIsSubmitting(false);
        setDidSubmit(true) ;
        cartCtx.clearCart();
    };
    //----------------------------------------------------------------------------------------
    const cartItems = <ul className={Classes['cart-items']}>{ cartCtx.items.map((item) => <CartItem key={item.id} img={item.img} name={item.name} amount={item.amount}
    price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null , item)} />)}</ul>;
    //-----------------------------------------------------------------------------------------
    const orderHandler = ()=> {setIsCheckout(true)} ;
    //-------------------------------------------------------------------------------------------
    const modalAction = <div className={Classes.actions} >
            <button className={Classes['button--alt']} onClick = {props.onClose}> Close</button>
            {hasItems && <button className={Classes.button} onClick={orderHandler} >Order</button>}
        </div>
    //---------------------------------------------------------------------------------------
    const cartModalContent = <React.Fragment>
                                {cartItems}
                                <div className={Classes.total}>
                                    <span>Total Amount</span>
                                    <span>{totalAmount}</span>
                                </div>
                                {isCheckout &&  <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler}/>}
                                {!isCheckout &&  modalAction}
                            </React.Fragment>
    //-------------------------------------------------------------------------------------
    const isSubmittingModalContent = <p>Sending Order Data ...</p> ;
    //------------------------------------------------------------------------------------------
    return <Modal onClose = {props.onClose}>
        {!isSubmitting && !didSubmit&&cartModalContent}
        {isSubmitting && isSubmittingModalContent}
        {
            !isSubmitting && didSubmit && 
            <React.Fragment>
                <p>Successfully Sent The Order!</p>
                <div className={Classes.actions} >
                    <button className={Classes['button--alt']} onClick = {props.onClose}> Close</button>
                </div>
            </React.Fragment>
        }
    </Modal>

};

export default Cart ;