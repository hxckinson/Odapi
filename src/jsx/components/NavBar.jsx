import React from 'react'
import {Link} from "react-router-dom"


function NavBar(props){
    return(
        <nav id = "navbar" className = "w3-sidebar w3-bar-block w3-animate-left w3-card">
            <Link to='/' className = "app-link">
                <div className="w3-bar-item w3-button">
                    <span className = "app-link-icon material-icons">home</span> Accueil 
                </div>
            </Link>
            <Link to='/RoI' className = "app-link">
                <div className="w3-bar-item w3-button">
                    <span className = "app-link-icon material-icons">query_stats</span> Retour sur investissment
                </div>
            </Link>
            <Link to='/depart' className = "app-link">
                <div className="w3-bar-item w3-button ">
                    <span className = "app-link-icon material-icons"> savings </span> Somme de départ
                </div>
            </Link>
            <Link to='/itarations' className = "app-link">
                <div className="w3-bar-item w3-button "> 
                    <span className = "app-link-icon material-icons"> filter_9_plus</span> Itérations
                </div>
            </Link>
            <Link to='/ratio' className = "app-link">
                <div className="w3-bar-item w3-button ">
                    <span className = "app-link-icon material-icons">percent</span> Taux par itération
                </div>
            </Link>
            {!props.web_version &&
            <Link to='/calculator' className = "app-link">
                <div className="w3-bar-item w3-button ">
                    <span className = "app-link-icon material-icons"> calculate </span> Calculatrice
                </div>
            </Link>
            }
        </nav>
    )
}

export default NavBar;