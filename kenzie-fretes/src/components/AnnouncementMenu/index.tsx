import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { AiOutlineEllipsis } from "react-icons/ai";
import { useState } from "react";

export default function AnnouncementMenu() {
  const [modal, setModal] = useState(false)

  function modalOpen(){
    setModal(true)
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="text"
            {...bindTrigger(popupState)}
            className="button-announcement"
            style={{ width: "fit-content" }}
          >
            <AiOutlineEllipsis size={30} style={{ color: "black" }} />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={()=>{popupState.close, setModal(true)}}>Editar</MenuItem>
            <MenuItem onClick={popupState.close}>Deletar</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
