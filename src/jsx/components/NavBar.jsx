import React from 'react'
import {Link} from "react-router-dom"


function NavBar(props){
    const setActive = (id) => {
        let menu_items    = document.getElementsByClassName('w3-bar-item');
        let this_bar_item = document.getElementById(id);
        setTimeout(() => {
            console.debug(menu_items);
            console.debug(this_bar_item)
            for(let element of menu_items)  {
                element.classList.remove("w3-gray");
            }
        },20)
        setTimeout(() => {this_bar_item.classList.add("w3-gray")}, 50)

    }
    return(
        <nav id = "navbar" className = "w3-sidebar w3-bar-block w3-animate-left w3-card">
            <Link to='/' className = "app-link">
                <div id ="home-bar-item" className="w3-bar-item w3-button" onClick={()=>setActive("home-bar-item")}>
                    <span className = "app-link-icon material-icons">home</span> Accueil 
                </div>
            </Link>
            <Link to='/RoI' className = "app-link">
                <div id ="roi-bar-item" className="w3-bar-item w3-button" onClick={()=>setActive("roi-bar-item")}>
                    <span className = "app-link-icon material-icons">query_stats</span> Retour sur investissment
                </div>
            </Link>
            <Link to='/depart' className = "app-link">
                <div id ="depart-bar-item" className="w3-bar-item w3-button " onClick={()=>setActive("depart-bar-item")}>
                    <span className = "app-link-icon material-icons"> savings </span> Somme de départ
                </div>
            </Link>
            <Link to='/iterations' className = "app-link">
                <div id ="iterations-bar-item" className="w3-bar-item w3-button " onClick={()=>setActive("iterations-bar-item")}> 
                    <span className = "app-link-icon material-icons"> filter_9_plus</span> Itérations
                </div>
            </Link>
            <Link to='/ratio' className = "app-link">
                <div id ="ratio-bar-item" className="w3-bar-item w3-button " onClick={()=>setActive("ratio-bar-item")}>
                    <span className = "app-link-icon material-icons">percent</span> Taux par itération
                </div>
            </Link>
            {!props.web_version &&
            <Link to='/calculator' className = "app-link">
                <div id ="calculator-bar-item" className="w3-bar-item w3-button " onClick={()=>setActive("calculator-bar-item")}>
                    <span className = "app-link-icon material-icons"> calculate </span> Calculatrice
                </div>
            </Link>
            }
        </nav>
    )
}

export default NavBar;