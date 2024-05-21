import { Link } from "react-router-dom";

const Meal = ({meal}) => {
    const {idCategory, strCategory, strCategoryThumb} = meal;
    const mealStyle = {
        border: '2px solid skyblue',
        padding: '5px',
        borderRadius: '20px'

    }
    return (
        <div style={mealStyle}>
            <p></p>
            <img src={strCategoryThumb} alt="" />
            <h2>Name: {strCategory}</h2>
            {/* <Link to={`/meals/${idCategory}`}> Show details </Link> */}
        </div>
    );
};
export default Meal;