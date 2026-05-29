import React         from 'react'
import AddCardButton from '../components/buttons/AddCardButton';
import Card          from '../components/Card';
import empty         from '../../assets/pictures/empty_safe.png';
import {useContext}  from 'react'
import {AppContext}  from '../App'

function Page(props){
    
    const {pageType, pageTitle} = props;
    const cardType   = pageType;
    const {
        global_state,
        } = useContext(AppContext)

    const renderCards = (cardType) =>{
        let array = []
        global_state[cardType].map((elt, index) =>{
            array.push(<Card key={index} {...elt} pageType={cardType} cardIndex={index}/>);
            return 0;
        })
        return  array
    }
    return (
        <div>
            {
            global_state[cardType].length === 0 &&
            <div id = "empty-safe">
                <img id = "empty-safe-icon" src={empty} alt="empty page"/>
                <h4 id ="no-content">Aucun contenu pour le moment...</h4>
            </div>
            }
            <h3 className='page-title w3-border-bottom'>{pageTitle}</h3>
            {renderCards(pageType)}
            <AddCardButton page ={pageType}/>
        </div>)
}

export default Page;