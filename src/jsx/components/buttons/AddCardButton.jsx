import {React, useState} from 'react'
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
import {useContext} from 'react'
import {AppContext} from '../../App'

function AddCardButton(props){

    const {

      addCard,
      } = useContext(AppContext)

    const [anchorEl, setAnchorEl] = useState();
    const {page} =props;
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
      console.debug(e.currentTarget)
        setAnchorEl(e.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
    <>
        <Tooltip title="Ajouter une carte" arrow>
            <button className="w3-button w3-circle add-button" onClick={(e) => {handleClick(e)}}>+</button>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 1,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: '100%',
                right: '50%',
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 1,
              },
            },
          }}
          transformOrigin={{
            vertical: 225,
            horizontal: 145, }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {(page === 'home' || page === 'RoI') &&
          <MenuItem>
            <Link to='/RoI' className = "app-link" onClick={()=>addCard({key:'RoI',value:{}})}>Calcul du RoI</Link>
          </MenuItem>}
          {(page === 'home' || page === 'depart') &&
          <MenuItem>
            <Link to='/depart' className = "app-link"onClick={()=>addCard({key:'depart',value:{}})}>Calcul de la somme de départ</Link>
          </MenuItem>}
          {(page === 'home' || page === 'iterations') &&
          <MenuItem>
            <Link to='/iterations' className = "app-link" onClick={()=>addCard({key:'iterations',value:{}})}>Calcul du nombre d'itérations</Link>
          </MenuItem>}
          {(page === 'home' || page === 'ratio') &&
          <MenuItem>
            <Link to='/ratio' className = "app-link"onClick={()=>addCard({key:'ratio',value:{}})}>Calcul du taux par itération</Link>
          </MenuItem>}
        </Menu>
  </>
        )   
}

export default AddCardButton;