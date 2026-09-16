import { NavLink, Link, useLocation } from 'react-router-dom';
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

    const location = useLocation();

    const handleNavClick = (event, path) => {
        if (location.pathname === path) {
            event.preventDefault();
            window.scroll(0, 0);
            window.location.reload();
        }
    }


    return (
        <header>
            <div className="brand">
                <div className="logo">
                    <Link
                        to={`/`}
                        onClick={(event) => handleNavClick(event, '/')}>
                        <Wheat />
                    </Link>
                </div>
                <Link
                    to={`/`}
                    onClick={(event) => handleNavClick(event, '/')}
                >
                    <p>Vasudev Travel Agency</p>
                </Link>
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
                                        onClick={(event) => handleNavClick(event, link.path)}
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