import React from 'react'
import classes from './Navbar.module.css'
import src from '../../assets/images/icons8-clapperboard-64.png'
const Navbar = () => {
    return (
        <header className={classes.Navbar}>
            <img src={src} alt="icon"/>
            <nav>Movie Recommendation</nav>
            
        </header>
    )
}

export default Navbar
