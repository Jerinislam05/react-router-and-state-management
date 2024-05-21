import { useLoaderData } from "react-router-dom";

const SeaFoodDetails = () => {
    const SeaFood = useLoaderData();
    const {strMeal} = SeaFood;
    return (
        <div>
            <h2>Details about Sea Food: {strMeal}</h2>
        </div>
    );
};

export default SeaFoodDetails;