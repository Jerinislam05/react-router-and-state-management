import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
import './Meals.css';

const TotalMeals = () => {
    const meals = useLoaderData();
    console.log(meals);
    return (
        <div>
            <h2>Our Total Meals Items: {meals.categories.length}</h2>
            <p>Delicious and Mouthwatering Food!!! </p>
            <div className="meals">
                {
                    meals.categories.map(meal => <Meal key={meal.id} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default TotalMeals;