import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../style/index.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid my-2 bg-primary">
                <ul className="nav navbar-nav bg-primary">
                    <NavLink className="nav-link text-light" to="/klientai/admin">
                        Klientai
                    </NavLink>
                    <NavLink className="nav-link text-light" to="/inventorius">
                        Inventorius
                    </NavLink>
                    <NavLink className="nav-link text-light" to="/ataskaitos">
                        Ataskaitos
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
