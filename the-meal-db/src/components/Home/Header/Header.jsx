import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <h2>Welcome To TheMealDB Website</h2>
                <hr />
                <Link to='/'>Home</Link>
                <Link to='/meals'>MealsItems</Link>
                <Link to='/seafoods'>SeaFoods</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact</Link>
                <hr />
            </nav>
        </div>
    );
};

export default Header;