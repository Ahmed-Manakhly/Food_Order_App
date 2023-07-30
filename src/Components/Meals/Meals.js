// import Classes from './Meals.module.css' ;
import MealsSummary from './MealsSummary' ;
import AvailableMeals from './AvailableMeals' ;
import  React,{Fragment , useState}from 'react' ;


const Meals = () => {
    const [menue , setMenue] = useState() ;
    const onChangemenueHandler = (menue)=>{
        setMenue(menue) ;
    }

    return <Fragment>
        <MealsSummary onChangemenue={onChangemenueHandler}/>
        <AvailableMeals menue={menue}/>
    </Fragment>
};
export default Meals;