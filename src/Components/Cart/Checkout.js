import Classes from './Checkout.module.css' ;
import React,{useRef ,  useState} from 'react' ;



const isEmpty = value => value.trim() === '' ;
const isFiveChars = value => value.trim().length === 5 ;
//--------------------------------------
const Checkout = props => {
    //--------------------------------
    const [formInputValidity ,setFormInputValidity] = useState({
        name: true,
        street:true,
        postalCode:true,
        city:true,
    });
    //------------------------------
    const nameInputRef = useRef() ;
    const streetInputRef = useRef() ;
    const postalCodeInputRef = useRef() ;
    const cityInputRef = useRef() ;
    //----------------------------------------
    const confirmHandler  = (event)=> {
        event.preventDefault();
        //-------------------------------------------
        const enteredNme = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        //-----------------------------------------
        const enteredNmeIsValid = !isEmpty(enteredNme) ;
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
        const enteredCityIsValid = !isEmpty(enteredCity);
        //-----------------------------------------------
        setFormInputValidity({
            name: enteredNmeIsValid,
            street:enteredStreetIsValid,
            postalCode:enteredPostalCodeIsValid,
            city:enteredCityIsValid,
        })
        //-----------------------------------------
        const formIsValid = enteredNmeIsValid&&enteredStreetIsValid&&enteredPostalCodeIsValid&&enteredCityIsValid ;
        if(!formIsValid) {
            return ;
        };
        props.onConfirm({
            name: enteredNme,
            street:enteredStreet,
            postalCode:enteredPostalCode,
            city:enteredCity,
        })
    } ;
    //-------------------------------------------
    return(
        <form action="" className={Classes.form} onSubmit={confirmHandler}>
            <div className={`${Classes.control} ${formInputValidity.name? '': Classes.invalid}`}>
                <label htmlFor="name">Your Name</label>
                <input type="text"  id='name' ref={nameInputRef}/>
                {!formInputValidity.name && <p> please enter a valid name</p>}
            </div>
            <div className={`${Classes.control} ${formInputValidity.street? '': Classes.invalid}`}>
                <label htmlFor="street">Street Name</label>
                <input type="text"  id='street' ref={streetInputRef}/>
                {!formInputValidity.street && <p> please enter a valid street</p>}
            </div>
            <div className={`${Classes.control} ${formInputValidity.postalCode? '': Classes.invalid}`}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text"  id='postal'ref={postalCodeInputRef}/>
                {!formInputValidity.postalCode && <p> please enter a valid postalCode (5 characters long)!</p>}
            </div>
            <div className={`${Classes.control} ${formInputValidity.city? '': Classes.invalid}`}>
                <label htmlFor="city">City</label>
                <input type="text"  id='city' ref={cityInputRef}/>
                {!formInputValidity.city && <p> please enter a valid city</p>}
            </div>
            <div className={Classes.actions}>
                <button type='button' onClick={props.onCancel}> Cancel </button>
                <button className={Classes.submit}>Confirm</button>
            </div>
        </form>
    );
};
export default Checkout ;