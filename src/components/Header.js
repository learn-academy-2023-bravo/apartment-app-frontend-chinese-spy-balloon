import { Link } from "react-router-dom"
import '../App.css'


const Header = () => {


    return (
        <>
        <header>
            <nav>
            <Link to="/SignIn" className="nav-link">
                <h4>Sign In</h4>
            </Link>
            <Link to="/SignUp" className="nav-link">
                <h4>Sign Up</h4>
            </Link>
            <Link to="/" className= "nav-link">
                <h4>Home</h4>
            </Link>
            </nav>
        </header>
        </>
    )
}


export default Header