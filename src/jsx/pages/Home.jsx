import React from 'react'
import AddCardButton from '../components/buttons/AddCardButton';
import empty from '../../assets/pictures/empty_safe.png';
import {useContext} from 'react'
import {AppContext} from '../App'

function Home(){
    const {
        global_state,
        } = useContext(AppContext)
    return (
        <div>
            {
            (global_state.RoI.length === 0    || global_state.iterations.length === 0 || 
             global_state.depart.length === 0 || global_state.ratio.length === 0   )  &&
            <div id = "empty-safe">
                <img id = "empty-safe-icon" src={empty} alt="empty page"/>
                <h4 id ="no-content">No Content yet ...</h4>
            </div>
            }
            <h3 className='page-title w3-border-bottom'>Accueil</h3>
            <AddCardButton page ='home'/>
        </div>)
}

export default Home;