import '../navbar.css'
import {NavLink, useNavigate} from 'react-router-dom'

const NavBar = () =>{
    const navigate = useNavigate();

    return(
        <>
        <nav className="navbar">
            <div className="container">
                <div className='nav-elements'>
                    <ul>
                        <li>
                            <NavLink to="/home" onClick={()=>navigate("/home")}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" onClick={()=>navigate("/dashboard")}>Dashboard</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
export default NavBar;