import React from 'react';

function Header(props){
    const openNavbar = () => {
        const navbar = document.getElementById("navbar");
        const overlay = document.getElementById("overlay");
        const closeIcon = document.getElementById("close-navbar-icon");
        const openIcon = document.getElementById("open-navbar-icon");
        
        if (navbar) navbar.style.display = "block";
        if (overlay) overlay.style.display = "block";
        if (closeIcon) closeIcon.style.display = "block";
        if (openIcon) openIcon.style.display = "none";
    }

    return (
        <header className="w3-container app-header">
            <h1 className="w3-large">
                <span 
                    id = "open-navbar-icon" 
                    className = "material-icons header-icon w3-xlarge"
                    onClick = {openNavbar}
                    style={{ cursor: 'pointer' }}> 
                        menu 
                </span>
                <span 
                    id = "close-navbar-icon" 
                    className = "material-icons header-icon w3-xlarge"
                    onClick = {props.closeNavbar}
                    style={{ cursor: 'pointer' }}>
                        close
                </span> 
                <span className = "header-title"> Odapi Calculator </span>
            </h1>
        </header>
    )
}
export default Header;