import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/");
    };

    return (
        <div>
            <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <NavLink to="/dashboard" className="navbar-item">
                        <img src={logo} width="28" height="28" alt='logo' />
                        <div className='mx-2' style={{ display: "flex", flexDirection: "column", fontWeight: "bold" }}>
                            <p style={{ fontSize: "13px" }}>Lowongan Pekerjaan</p>
                            <p style={{ fontSize: "13px" }}> IT Del</p>
                        </div>
                    </NavLink>

                    <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button onClick={logout} className="button is-light" style={{ fontWeight: "bold" }}>
                                    {user && user.name}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar