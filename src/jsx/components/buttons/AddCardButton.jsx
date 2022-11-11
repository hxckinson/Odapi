import {React, useState} from 'react'
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";

function AddCardButton(props){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
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
            elevation: 0,
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
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{
            vertical: 225,
            horizontal: 145, }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Link to='/RoI' className = "app-link">Calcul du RoI</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/depart' className = "app-link">Calcul de la somme de départ</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/iterations' className = "app-link">Calcul du nombre d'itérations</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/ratio' className = "app-link">Calcul du taux par iération</Link>
          </MenuItem>
        </Menu>
  </>
        )   
}

export default AddCardButton;