import { Link } from "react-router-dom";

const SeaFood = ({seaFood}) => {
    const { idMeal, strMeal, strMealThumb } = seaFood;
    const seaFoodStyle = {
        border: '2px solid red',
        padding: '5px',
        borderRadius: '20px'
    }
    const imgStyle = {
        maxHeight: '200px'
    };

    return (
        <div style={seaFoodStyle}>
            <img src={strMealThumb} alt={strMeal} style={imgStyle} />
            <h4>{strMeal}</h4>
            <Link to={`/seafoods/${idMeal}`}><button>Show details</button></Link>
        </div>
    );
};

export default SeaFood;