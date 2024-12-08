import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className='nav'>
                <a href='/' className='homepage-link'> 
                  <p>     Home     </p>
                </a>
                <a href='/game' className='game-link'> 
                    <p>     Game     </p>
                </a>
                <a href='/saltwaterfish' className='saltfish-link'> 
                    <p>     Saltwater Fish     </p>
                </a>
                <a href='/freshfish' className='freshfish-link'> 
                    <p>     Freshwater Fish     </p>
                </a>
                <a href='/plants' className='plants-link'> 
                    <p>     Plants     </p>
                </a>
            </nav>
        </div>
    )
}


export default Navbar;