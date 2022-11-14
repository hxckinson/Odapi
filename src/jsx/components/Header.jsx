import React from 'react';

function Header(props){
    const openNavbar = () => {
        document.getElementById("navbar").style.display = "block";
        if(!props.web_version) document.getElementById("overlay").style.display = "block";
        document.getElementById("close-navbar-icon").style.display = "block";
        document.getElementById("open-navbar-icon").style.display = "none";
      }

    return (
        <header className="w3-container app-header">
            <h1 className="w3-large">
                <span 
                    id = "open-navbar-icon" 
                    className = "material-icons header-icon w3-xlarge"
                    onClick = {openNavbar}> 
                        menu 
                </span>
                <span 
                    id = "close-navbar-icon" 
                    className = "material-icons header-icon w3-xlarge"
                    onClick = {props.closeNavbar}>
                        close
                </span> 
                <span className = "header-title"> Odapi Calculator </span>
            </h1>
        </header>
    )
}
export default Header;