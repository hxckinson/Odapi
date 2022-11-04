import React from 'react'
import {Link} from "react-router-dom"


function NavBar(){
    return(
        <nav>
            <Link to='/'><div> Retour sur investissment </div></Link>
            <Link to='/depart'><div> Somme de départ </div></Link>
            <Link to='/itaration'><div> Itérations </div></Link>
            <Link to='/ratio'><div> Taux </div></Link>
            <Link to='/calculator'><div> Calculatrice </div></Link>
        </nav>
    )
}

export default NavBar