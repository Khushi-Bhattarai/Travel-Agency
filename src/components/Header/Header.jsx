import { NavLink } from 'react-router-dom';
import './Header.css';
import Button from '../Button/Button';
import { Wheat } from 'lucide-react';


function Header() {

    const navLinks = [

        {
            label: 'Vlog',
            path: '/vlog'
        },
        {
            label: 'Home',
            path: '/'
        }, 
        {
            label: 'Destinations',
            path: '/destinations'
        },
        {
            label: 'Tours',
            path: '/tours'
        },
        {
            label: 'Contact',
            path: '/contact'
        }
    ];


    return (
        <header>
            <div className="brand">
                <div className="logo">
                    <Wheat />
                </div>
                <p>Vasudev Travel Agency</p>
            </div>
            <nav>
                <ul>
                    {
                        navLinks.map((link) => {
                            return (
                                <li key={link.label}>
                                    <NavLink
                                        to={link.path}
                                        end={link.path === '/'}
                                        className={({ isActive }) => isActive ? "active" : ""}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>

            <div className="header-action">
                <Button>Book Now</Button>
                <Button>Login</Button>
                <Button>Register</Button>
            </div>
        </header>
    )
}

export default Header