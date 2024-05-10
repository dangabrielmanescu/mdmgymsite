import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../Dependecies/logo.png'

const Navbar = ()=>{
    return(
        <nav>
            <div className="logo-container">
        <img src={logo} alt="My Logo" style={{ width: '300px', height: 'auto' }} />
      </div>
            <ul>
                <li>
                    <Link to={'/'}>Homepage</Link>
                </li>
                <li>
                    <Link to={'/BmiCalculator'}>BMI Calculator</Link>
                </li>
                <li>
                    <Link to={'/CaloriesCalculator'}>Calories per day Calculator</Link>
                </li>
                <li>
                    <Link to={'/Register'}>Register</Link>
                </li>
                <li>
                    <Link to={'/Contact'}>Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;