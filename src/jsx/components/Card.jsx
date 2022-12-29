import React from 'react';

function Card(props){
    return(
        <div className="w3-container generic-card">
            <div className="w3-card-4">
                <header className="w3-container w3-light-grey">
                    <h3>John Doe</h3>
                </header>
                <div className="w3-container">
                    <p>1 new friend request</p>
                    <hr/>
                    <p>CEO at Mighty Schools. Marketing and Advertising. Seeking a new job and new opportunities.</p>
                    <br/>
                </div>
                <button className="w3-button w3-block w3-dark-grey w3-medium simulate-button">Lancer la simulation</button>
            </div>
        </div>
    )
    }

export default Card;