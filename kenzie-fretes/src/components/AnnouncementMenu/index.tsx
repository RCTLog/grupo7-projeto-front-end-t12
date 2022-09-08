import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { AiOutlineEllipsis } from 'react-icons/ai';

export default function AnnouncementMenu() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="text" {...bindTrigger(popupState)} className="button-announcement" style={{width: 'fit-content'}}>
            <AiOutlineEllipsis size={30} style={{color: 'black'}}/>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Editar</MenuItem>
            <MenuItem onClick={popupState.close}>Deletar</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
