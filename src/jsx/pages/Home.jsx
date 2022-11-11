import AddCardButton from '../components/buttons/AddCardButton';
import empty from '../../assets/pictures/empty_safe.png';

function Home(){
    return (
        <div>
            <div id = "empty-safe">
                <img id = "empty-safe-icon" src={empty} alt="empty page"/>
                <h4 id ="no-content">No Content yet ...</h4>
            </div>
            <AddCardButton/>
        </div>)
}

export default Home;