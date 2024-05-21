import { useLoaderData } from "react-router-dom";
import SeaFood from "./SeaFood/SeaFood";
import './seaFood.css'

const SeaFoods = () => {
    const SeaFoods = useLoaderData();
    console.log(SeaFoods);
    return (
        <div>
            <h1>All SeaFoods: {SeaFoods.meals.length}</h1>
            <div className="seaFood">
                {
                    SeaFoods.meals.map(seaFood => <SeaFood key={seaFood.idMeal} seaFood={seaFood}></SeaFood>)
                }
            </div>
        </div>
    );
};

export default SeaFoods;