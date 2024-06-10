import React from 'react';

function Card(props){
    return(
        <div className="w3-container generic-card">
            <div className="w3-card-4">
                <header className="w3-container w3-light-grey">
                    <input className='w3-input card-input' name='card_name' type='text' placeholder="Enter card name"/>
                </header>
                <div className="w3-container">
                    <br/>
                    <div>
                        <label>Somme de départ</label>
                        <input className='w3-input card-input' name='depart' type='number' min='0'/>
                    </div>
                    <br/>
                    <div>
                        <label>Raison</label>
                        <input className='w3-input card-input' name='ratio' type='number' min='0'/>
                    </div>
                    <br/>
                    <div>
                        <label>Nombre d'itérations</label>
                        <input className='w3-input card-input' name='iterations' type='number' min='0'/>
                    </div>
                    <br/>
                </div>
                <button className="w3-button w3-block w3-dark-grey w3-medium simulate-button">Lancer la simulation</button>
            </div>
        </div>
    )
    }

export default Card;