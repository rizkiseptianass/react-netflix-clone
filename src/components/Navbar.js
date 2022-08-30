import React, { useEffect, useState } from "react";
import './Navbar.css';

const Navbar = () => {

    const [show, setShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100){
            setShow(true);
        } else{
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
    }, [])

    return(
        <div className={`navbar ${show && 'navbar_black'}`}>
            <div className="navbar_contents">
                <img className="nav_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""></img>
                <img className="nav_avatar" src="https://denus.co.id/lib/template_fox_denus/assets/img/testimonials/testimonials-6.png" alt=""></img>
            </div>
        </div>
    )
}

export default Navbar;