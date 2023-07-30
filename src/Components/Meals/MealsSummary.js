import classes from './MealsSummary.module.scss' ;
import React , {useState} from 'react' ;
import JunkFoodImg from '../../Assets/junk food.jpg' ;
import PizzaImg from '../../Assets/Pizza.jpg' ;
import PastaImg from '../../Assets/Pasta.jpg' ;
import seafoodImg from '../../Assets/seafood.jpg' ;

const MealsSummary = (props) => {
    //---------------------------------------------------
    const [next , setIndex] = useState({index : 0 , after : false, before : true}) ;
    const menus = [{name : 'Junk Food' , img : JunkFoodImg} , {name : 'Pizza' , img : PizzaImg} ,  {name : 'Seafood' , img :seafoodImg } , {name : 'Pasta' , img : PastaImg}] ;
    //---------------------------------------------
    const increaseIndexHandler = () => {
        setIndex((prev=> {
            if(prev.index + 1 === menus.length -1) {
                return {index : prev.index + 1 ,after : true , before : false};
            }else if(prev.index  === menus.length  -1){  
                return 
            }else {
                return { index : prev.index + 1 ,after : false , before : false};
            }
        }))
    }
    //------------------------
    const decreaseIndexHandler = () => {
        setIndex((prev=> {
            if(prev.index - 1 === 0 ) {
                return {index : prev.index - 1 , after : false , before : true};
            }else if(prev.index === 0){   return
            }else { 
                return { index : prev.index - 1 ,after : false , before : false};
            }
        }))
    }
    props.onChangemenue(menus[next.index].name) ;
    //------------------------
    return <section className={classes.summary}>
        <h2>Delicious food, delivered to you</h2>
        <p>
        Choose your Menu Please
        </p>
        <section className={classes.menus}>
            <button className={`${classes.before} btn `}onClick={decreaseIndexHandler} disabled={next.before}>Previse</button>
            <div className={classes.menue}> 
                <h2>{menus[next.index].name}</h2>
                <img src={menus[next.index].img} alt="foodMenue" />
            </div>
            <button className= {`${classes.after} btn `} onClick={increaseIndexHandler} disabled={next.after}>Next</button>
        </section>
    </section>
};
export default MealsSummary;