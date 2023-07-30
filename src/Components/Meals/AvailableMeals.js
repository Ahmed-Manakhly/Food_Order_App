import classes from './AvailableMeals.module.css' ;
import React , {useEffect , useState} from 'react' ;
import Card from '../UI/Card' ;
import MealItem from './MealItem/MealItem' ;

const AvailableMeals = (props) => {
    //----------------------------------------------------------------------------------
    const [meals , setMeals] = useState([]) ;
    const [isLoading , setIsLoading] = useState(true) ;
    const [httpError , setHttpError] = useState() ;
    useEffect(()=>{
        const fetchMeals = async ()=> {
            const response = await fetch('https://movie-app-b7e60-default-rtdb.firebaseio.com/meals.json');
            if(!response.ok){
                throw new Error('Something Went Wrong!') ;
            };
            const responseData = await response.json();
            const loadedMeals = [] ;
            for (const key in responseData ) {
                loadedMeals.push({id:key , name : responseData[key].name ,description : responseData[key].description ,price : responseData[key].price ,
                    menue : responseData[key].menue , img : responseData[key].img}) ;
            }
            setMeals(loadedMeals) ;
            setIsLoading(false) ;
        }
        fetchMeals().catch((error)=>{ setIsLoading(false); setHttpError(error.message);});
    } , []);
    //-------------------------------------------------------------------------------
    if(isLoading) {
        return(
            <section className={classes.mealsLoading} >
                <p>Loading ...</p>
            </section>
        )
    }
    //-----------------------------------------------------------------------------------
    if(httpError) {
        return(
            <section className={classes.mealsError} >
                <p>{httpError}</p>
            </section>
        )
    }
    //--------------------------------------------------------------------------------
    const filteredMeals = meals.filter(meal => meal.menue === props.menue) ;
    const mealsList = filteredMeals.map((meal) => <MealItem id={meal.id} key={meal.id} name ={meal.name} description = {meal.description} price = {meal.price} img= {meal.img}/>)
    //--------------------------------------------------------------------------------
    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
};
export default AvailableMeals;